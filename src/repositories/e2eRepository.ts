import prisma from '../config/database';

export async function truncate() {
  await prisma.$executeRaw`TRUNCATE TABLE users;`;
}