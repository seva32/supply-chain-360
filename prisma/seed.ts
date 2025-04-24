import { PrismaClient } from '../backend/generated/prisma/client'

import { seedDevelopment } from './seeds/development'
import { seedStaging } from './seeds/staging'

const prisma = new PrismaClient()
const env = process.env.NODE_ENV || 'development'

async function main() {
  console.log(`🌱 Seeding for environment: ${env}`)

  if (env === 'development') {
    await seedDevelopment(prisma)
  } else if (env === 'staging') {
    await seedStaging(prisma)
  } else {
    throw new Error(`Unrecognized NODE_ENV: ${env}`)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
