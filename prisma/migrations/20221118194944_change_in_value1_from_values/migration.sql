-- CreateEnum
CREATE TYPE "any" AS ENUM ('Int', 'String');

-- AlterTable
ALTER TABLE "Values" ALTER COLUMN "value1" SET DATA TYPE TEXT;
