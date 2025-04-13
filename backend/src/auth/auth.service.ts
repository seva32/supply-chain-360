import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import sgMail from '@sendgrid/mail'
import { UsersService } from '../users/users.service'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const OTP_STORE = new Map() // In-memory store for demo. Use Redis in prod.

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async requestOtp(email: string) {
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    OTP_STORE.set(email, { otp, expires: Date.now() + 5 * 60 * 1000 })

    try {
      await sgMail.send({
        to: 'sebas.warsaw@gmail.com',
        from: 'hello@sfantini.us',
        subject: 'Your OTP Code',
        text: `Your OTP is ${otp}. It expires in 5 minutes.`,
      })
      console.log(`OTP sent to ${email}: ${otp}`)
    } catch (error) {
      console.error('Error sending email:', error, error.response.body)
      throw new UnauthorizedException('Failed to send OTP')
    }

    return { message: 'OTP sent' }
  }

  async verifyOtp(email: string, otp: string) {
    const record = OTP_STORE.get(email)
    if (!record || record.otp !== otp || Date.now() > record.expires) {
      throw new UnauthorizedException('Invalid or expired OTP')
    }

    // Clear OTP
    OTP_STORE.delete(email)

    // Upsert user
    let user = await this.usersService.findByEmail(email)
    if (!user) {
      user = await this.usersService.create({ email, role: 'USER' })
    }

    const payload = { sub: user.id, role: user.role }
    const token = this.jwtService.sign(payload)

    return {
      access_token: token,
      user,
    }
  }
}
