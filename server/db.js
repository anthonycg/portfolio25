import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

/** @type {PrismaClient | undefined} */
let prisma = globalForPrisma.__prisma;

if (!prisma) {
    prisma = new PrismaClient({
        log: ["error", "warn", "query"],
    });
    globalForPrisma.__prisma = prisma;
}

export default prisma;
