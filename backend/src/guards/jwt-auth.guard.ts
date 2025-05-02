import { Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') { }

// @UseGuards(JwtAuthGuard)
// @Get('profile')
// getProfile(@Request() req) {
//   return req.user
// }
