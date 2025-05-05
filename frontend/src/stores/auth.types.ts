// types/auth.ts

export type Permission = 'view_shipments' |
    'edit_shipments' |
    'manage_users' |
    'lock_unlock_users' |
    'view_audit_logs' |
    'manage_roles'

export type Role = {
    id: string;
    name: string;
    permissions: Permission[];
};

export type User = {
    id: string;
    name: string;
    email: string;
    role: Role;
    locked: boolean;
};

// export type AuthToken = {
//     accessToken: string;
//     refreshToken: string;
// };

// export type AuthState = {
//     accessToken: string | null;
//     refreshToken: string | null;
//     isAuthenticated: boolean;
//     user: User | null;
//     login: (authToken: AuthToken, user: User) => void;
//     logout: () => void;
//     setUser: (user: User) => void;
//     clearUser: () => void;
//     isUserLocked: () => boolean;
//     hasPermission: (permission: Permission) => boolean;
//     hasRole: (roleName: string) => boolean;
//     hasAnyRole: (roleNames: string[]) => boolean;
//     hasAnyPermission: (permissions: Permission[]) => boolean;
//     hasAllPermissions: (permissions: Permission[]) => boolean;
//     hasAllRoles: (roleNames: string[]) => boolean;
//     hasAnyRoleOrPermission: (roleNames: string[], permissions: Permission[]) => boolean;
//     hasAllRoleOrPermission: (roleNames: string[], permissions: Permission[]) => boolean;
//     isAuthenticatedAndNotLocked: () => boolean;
//     isAuthenticatedAndLocked: () => boolean;
//     isAuthenticatedAndHasPermission: (permission: Permission) => boolean;
//     isAuthenticatedAndHasRole: (roleName: string) => boolean;
//     isAuthenticatedAndHasAnyRole: (roleNames: string[]) => boolean;
//     isAuthenticatedAndHasAnyPermission: (permissions: Permission[]) => boolean;
//     isAuthenticatedAndHasAllPermissions: (permissions: Permission[]) => boolean;
//     isAuthenticatedAndHasAllRoles: (roleNames: string[]) => boolean;
//     isAuthenticatedAndHasAnyRoleOrPermission: (roleNames: string[], permissions: Permission[]) => boolean;
//     isAuthenticatedAndHasAllRoleOrPermission: (roleNames: string[], permissions: Permission[]) => boolean;
// }