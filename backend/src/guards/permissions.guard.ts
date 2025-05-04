import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermissionsGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredPermissions = this.reflector.getAllAndOverride<string[]>('permissions', [
            context.getHandler(),
            context.getClass(),
        ]);

        if (!requiredPermissions || requiredPermissions.length === 0) return true;

        const { user } = context.switchToHttp().getRequest();

        if (!user || !user.role || !user.role.permissions) {
            throw new ForbiddenException('No permissions found');
        }

        const userPermissions = user.role.permissions.map((p: { permission: { name: string } }) => p.permission.name);

        const hasPermission = requiredPermissions.every((perm) =>
            userPermissions.includes(perm)
        )

        if (!hasPermission) {
            throw new ForbiddenException('Insufficient permissions')
        }

        return true
    }
}
