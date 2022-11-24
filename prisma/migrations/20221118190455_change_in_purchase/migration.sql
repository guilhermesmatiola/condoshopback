/*
  Warnings:

  - You are about to drop the column `compra` on the `Purchases` table. All the data in the column will be lost.
  - Added the required column `product_id` to the `Purchases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Purchases" DROP COLUMN "compra",
ADD COLUMN     "product_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Purchases" ADD CONSTRAINT "Purchases_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
