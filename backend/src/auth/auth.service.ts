import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import sgMail from '@sendgrid/mail'
import * as bcrypt from 'bcrypt'
import { UsersService } from '../users/users.service'
import { PrismaService } from '../prisma/prisma.service'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async requestOtp(email: string) {
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    const codeHash = await bcrypt.hash(otp, 10)
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000)

    let user = await this.usersService.findByEmail(email)
    if (!user) {
      user = await this.usersService.create({ email, role: 'USER' })
    }

    await this.prisma.otp.create({
      data: {
        codeHash,
        expiresAt,
        userId: user.id,
      },
    })

    try {
      await sgMail.send({
        to: email,
        from: 'hello@sfantini.us',
        subject: 'Your OTP Code',
        text: `Your OTP is ${otp}. It expires in 5 minutes.`,
      })
      console.log(`OTP sent to ${email}: ${otp}`)
    } catch (error) {
      console.error('Error sending email:', error, error.response?.body)
      throw new UnauthorizedException('Failed to send OTP')
    }

    return { message: 'OTP sent' }
  }

  async verifyOtp(email: string, otp: string) {
    const user = await this.usersService.findByEmail(email)
    if (!user) {
      throw new UnauthorizedException('User not found')
    }

    const otpRecord = await this.prisma.otp.findFirst({
      where: {
        userId: user.id,
        expiresAt: { gt: new Date() },
      },
      orderBy: { expiresAt: 'desc' },
    })

    if (!otpRecord || !(await bcrypt.compare(otp, otpRecord.codeHash))) {
      throw new UnauthorizedException('Invalid or expired OTP')
    }

    await this.prisma.otp.delete({ where: { id: otpRecord.id } })

    const { accessToken, refreshToken } = await this.generateTokens(user)
    await this.storeRefreshToken(user.id, refreshToken)
    return {
      accessToken,
      refreshToken,
      user: { email: user.email, role: user.role },
    }
  }

  async generateTokens(user: { id: string; email: string }) {
    const payload = { sub: user.id, email: user.email }

    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRATION,
    })

    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: process.env.JWT_REFRESH_EXPIRATION,
    })

    return { accessToken, refreshToken }
  }

  async storeRefreshToken(userId: string, token: string) {
    const hashed = await bcrypt.hash(token, 10)
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: hashed },
    })
  }

  async verifyRefreshToken(userId: string, token: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } })
    if (!user?.refreshToken) return false
    return bcrypt.compare(token, user.refreshToken)
  }
}
