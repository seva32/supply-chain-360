import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermissionsGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredPermissions = this.reflector.getAllAndOverride<string[]>('permissions', [
            context.getHandler(),
            context.getClass(),
        ]);

        if (!requiredPermissions) return true;

        const { user } = context.switchToHttp().getRequest();

        if (!user || !user.role || !user.role.permissions) return false;

        const userPermissions = user.role.permissions.map((p: { name: string }) => p.name);

        return requiredPermissions.some((perm) => userPermissions.includes(perm));
    }
}
