import pgk from '@prisma/client'

const {PrismaClient} = pgk
const client = new PrismaClient();

export default client