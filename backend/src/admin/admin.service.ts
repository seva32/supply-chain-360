// src/modules/admin/admin.service.ts
import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async changeUserRole(actorId: string, userId: string, roleId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } })
    if (!user) throw new NotFoundException('User not found')

    const updated = await this.prisma.user.update({
      where: { id: userId },
      data: { roleId },
    })

    await this.prisma.auditLog.create({
      data: {
        actorId,
        action: 'CHANGE_USER_ROLE',
        targetId: userId,
        metadata: {
          targetUserId: userId,
          newRoleId: roleId,
        },
      },
    })

    return updated
  }

  async lockUser(actorId: string, userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } })
    if (!user) throw new NotFoundException('User not found')

    const updated = await this.prisma.user.update({
      where: { id: userId },
      data: { locked: true },
    })

    await this.prisma.auditLog.create({
      data: {
        actorId,
        action: 'LOCK_USER',
        targetId: userId,
        metadata: {
          targetUserId: userId,
        },
      },
    })

    return updated
  }

  async unlockUser(actorId: string, userId: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } })
    if (!user) throw new NotFoundException('User not found')

    const updated = await this.prisma.user.update({
      where: { id: userId },
      data: { locked: false },
    })

    await this.prisma.auditLog.create({
      data: {
        actorId,
        action: 'UNLOCK_USER',
        targetId: userId,
        metadata: {
          targetUserId: userId,
        },
      },
    })

    return updated
  }

  async getAuditLogs() {
    return this.prisma.auditLog.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    })
  }

  async getAllUsers() {
    return this.prisma.user.findMany({
      include: {
        role: {
          select: { name: true, id: true },
        },
      },
    })
  }
}
