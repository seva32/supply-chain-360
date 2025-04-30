import { PrismaClient } from '../../backend/generated/prisma/client'
import { randomUUID } from 'crypto'

export async function seedCommon(prisma: PrismaClient) {
  await prisma.permission.createMany({
    data: [
      { name: 'view_shipments' },
      { name: 'edit_shipments' },
      { name: 'manage_users' },
      { name: 'lock_unlock_users' },
      { name: 'view_audit_logs' },
      { name: 'manage_roles' },
    ],
    skipDuplicates: true,
  })

  const allPermissions = await prisma.permission.findMany()

  function findPerm(name: string) {
    const p = allPermissions.find((perm) => perm.name === name)
    if (!p) throw new Error(`Permission '${name}' not found`)
    return { id: p.id }
  }

  const roles = [
    {
      id: randomUUID(),
      name: 'admin',
      permissions: allPermissions.map((p) => ({ id: p.id })),
    },
    {
      id: randomUUID(),
      name: 'user',
      permissions: [findPerm('view_shipments')],
    },
    {
      id: randomUUID(),
      name: 'client',
      permissions: [findPerm('view_shipments')],
    },
    {
      id: randomUUID(),
      name: 'driver',
      permissions: [findPerm('view_shipments'), findPerm('edit_shipments')],
    },
    {
      id: randomUUID(),
      name: 'finance',
      permissions: [findPerm('view_shipments'), findPerm('view_audit_logs')],
    },
    {
      id: randomUUID(),
      name: 'manager',
      permissions: [
        findPerm('view_shipments'),
        findPerm('edit_shipments'),
        findPerm('manage_users'),
        findPerm('manage_roles'),
      ],
    },
  ]

  for (const role of roles) {
    await prisma.role.upsert({
      where: { name: role.name },
      update: {
        permissions: {
          set: [],
          connect: role.permissions,
        },
      },
      create: {
        id: role.id,
        name: role.name,
        permissions: {
          connect: role.permissions,
        },
      },
    })
  }

  return {
    roleIds: Object.fromEntries(roles.map((r) => [r.name, r.id])),
  }
}
