export type Role = 'ADMIN' | 'MANAGER' | 'DRIVER' | 'FINANCE' | 'USER'

export class CreateUserDto {
  email: string
  role?: Role = 'USER'
}
