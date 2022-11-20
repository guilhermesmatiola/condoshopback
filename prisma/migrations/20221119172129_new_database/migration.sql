/*
  Warnings:

  - You are about to drop the column `product_id` on the `Purchases` table. All the data in the column will be lost.
  - Added the required column `compra` to the `Purchases` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Purchases" DROP CONSTRAINT "Purchases_product_id_fkey";

-- AlterTable
ALTER TABLE "Purchases" DROP COLUMN "product_id",
ADD COLUMN     "compra" TEXT NOT NULL;
