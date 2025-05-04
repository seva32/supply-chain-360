import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { PrismaModule } from '../prisma/prisma.module'
import { AuthModule } from '../auth/auth.module'
import { UsersModule } from '../users/users.module'
import { AdminModule } from '../admin/admin.module'
import { ScheduleModule } from '@nestjs/schedule'
import { APP_GUARD } from '@nestjs/core';
import { PermissionsGuard } from '../guards/permissions.guard'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['../../.env.local'],
      isGlobal: true,
    }),
    ScheduleModule.forRoot(),
    PrismaModule,
    AuthModule,
    UsersModule,
    AdminModule,
  ],
  controllers: [],
  // providers: [{
  //   provide: APP_GUARD,
  //   useClass: PermissionsGuard,
  // },],
})
export class AppModule { }
