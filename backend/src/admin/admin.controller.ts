// src/modules/admin/admin.controller.ts
import {
    Controller,
    Get,
    Post,
    Put,
    Body,
    Param,
    Req,
    UseGuards,
    ParseUUIDPipe,
} from '@nestjs/common'
import { AdminService } from './admin.service'
import { RequestWithUser } from './dto'
import { PermissionsGuard } from '../guards/permissions.guard'
import { JwtAuthGuard } from '../guards/jwt-auth.guard'
import { Permissions } from '../guards/permissions.decorator'

@Controller('admin')
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    @Get('users')
    @Permissions('manage_users')
    getAllUsers() {
        return this.adminService.getAllUsers()
    }

    @Put('users/:id/role')
    @Permissions('manage_users')
    changeUserRole(
        @Param('id', ParseUUIDPipe) userId: string,
        @Body('roleId') roleId: string,
        @Req() req: RequestWithUser,
    ) {
        return this.adminService.changeUserRole(req.user.id, userId, roleId)
    }

    @Post('users/:id/lock')
    @Permissions('manage_users')
    lockUser(
        @Param('id', ParseUUIDPipe) userId: string,
        @Req() req: RequestWithUser,
    ) {
        return this.adminService.lockUser(req.user.id, userId)
    }

    @Post('users/:id/unlock')
    @Permissions('manage_users')
    unlockUser(
        @Param('id', ParseUUIDPipe) userId: string,
        @Req() req: RequestWithUser,
    ) {
        return this.adminService.unlockUser(req.user.id, userId)
    }

    @Get('audit-logs')
    @Permissions('manage_users')
    getAuditLogs() {
        return this.adminService.getAuditLogs()
    }
}
