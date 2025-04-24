import { PrismaClient } from '../../backend/generated/prisma/client'
import { randomUUID } from 'crypto'

export async function seedCommon(prisma: PrismaClient) {
  await prisma.permission.createMany({
    data: [
      { name: 'view_shipments' },
      { name: 'edit_shipments' },
      { name: 'manage_users' },
    ],
    skipDuplicates: true,
  })

  const all = await prisma.permission.findMany()
  const adminRoleId = randomUUID()
  const userRoleId = randomUUID()

  await prisma.role.create({
    data: {
      id: adminRoleId,
      name: 'admin',
      permissions: { connect: all.map((p) => ({ id: p.id })) },
    },
  })

  await prisma.role.create({
    data: {
      id: userRoleId,
      name: 'user',
      permissions: {
        connect: (() => {
          const permission = all.find((p) => p.name === 'view_shipments');
          if (!permission) {
            throw new Error("Permission 'view_shipments' not found");
          }
          return [{ id: permission.id }];
        })(),
      },
    },
  })

  return { adminRoleId, userRoleId }
}
