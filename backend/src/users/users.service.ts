import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateUserDto, UpdateUserDto } from './dto'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateUserDto) {
    const { roleId, ...rest } = data;
    let roleIdparsed: string | undefined = roleId;
  
    if (!roleIdparsed) {
      const defaultRole = await this.prisma.role.findFirst({
        where: { name: 'user' },
      });
  
      if (!defaultRole) {
        throw new Error('Default role not found');
      }
  
      roleIdparsed = defaultRole.id;
    }
  
    return this.prisma.user.create({
      data: {
        ...rest,
        role: {
          connect: { id: roleIdparsed },
        },
      },
    });
  }


  findAll() {
    return this.prisma.user.findMany()
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } })
  }

  update(id: string, data: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data })
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } })
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } })
  }
}
