import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { RequestOtpDto, VerifyOtpDto, RefreshTokenDto } from './dto'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('request-otp')
  requestOtp(@Body() dto: RequestOtpDto) {
    return this.authService.requestOtp(dto.email)
  }

  @Post('verify-otp')
  verifyOtp(@Body() dto: VerifyOtpDto) {
    return this.authService.verifyOtp(dto.email, dto.otp)
  }

  @Post('refresh-token')
  async refresh(@Body() dto: RefreshTokenDto) {
    return this.authService.verifyRefreshToken(dto.email, dto.refreshToken)
  }

  @Post('logout')
  async logout(@Body() dto: { email: string }) {
    return this.authService.logout(dto.email)
  }
}
