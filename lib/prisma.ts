import { PrismaClient } from '@/lib/generated/prisma/client';

// Type-safe global variable extension
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Initialize Prisma Client
const prisma: PrismaClient = global.prisma || new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

// Store in global variable in development to prevent hot-reload issues
if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma;
}

export default prisma;