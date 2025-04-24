import { PrismaClient } from '../../backend/generated/prisma/client'
import { seedCommon } from './common'

export async function seedStaging(prisma: PrismaClient) {
  const { adminRoleId } = await seedCommon(prisma)

  await prisma.user.create({
    data: {
      email: 'admin-staging-supply360@yopmail.com',
      roleId: adminRoleId,
    },
  })
}
