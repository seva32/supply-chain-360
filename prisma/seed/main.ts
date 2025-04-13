import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const users = await prisma.user.createMany({
    data: [
      { email: 'admin@supply360.com', role: 'ADMIN' },
      { email: 'finance@supply360.com', role: 'FINANCE' },
      { email: 'driver@supply360.com', role: 'DRIVER' },
    ],
  })

  console.table({ users })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
