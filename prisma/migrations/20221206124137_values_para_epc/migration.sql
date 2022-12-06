/*
  Warnings:

  - You are about to drop the `Purchases` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Values` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `recommendation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Purchases" DROP CONSTRAINT "Purchases_owner_id_fkey";

-- DropForeignKey
ALTER TABLE "Values" DROP CONSTRAINT "Values_value2_fkey";

-- DropTable
DROP TABLE "Purchases";

-- DropTable
DROP TABLE "Values";

-- DropTable
DROP TABLE "recommendation";

-- CreateTable
CREATE TABLE "recommendations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "recommendations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchases" (
    "id" SERIAL NOT NULL,
    "owner_id" INTEGER NOT NULL,
    "compra" TEXT NOT NULL,
    "hora" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "purchases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "epcs" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "product_id" INTEGER NOT NULL,

    CONSTRAINT "epcs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "recommendations_name_key" ON "recommendations"("name");

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "epcs" ADD CONSTRAINT "epcs_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
