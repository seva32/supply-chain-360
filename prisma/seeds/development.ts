import { PrismaClient } from '../../backend/generated/prisma/client'
import { seedCommon } from './common'

export async function seedDevelopment(prisma: PrismaClient) {
  const { roleIds } = await seedCommon(prisma)

  await prisma.user.create({
    data: {
      email: 'admin-supply360@yopmail.com',
      roleId: roleIds.admin,
      locked: false,
    },
  })

  await prisma.user.createMany({
    data: [
      { email: 'user1-supply360@yopmail.com', roleId: roleIds.client, locked: false },
      { email: 'user2-supply360@yopmail.com', roleId: roleIds.client, locked: false },
    ],
    skipDuplicates: true,
  })
}
