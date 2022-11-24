-- CreateTable
CREATE TABLE "Purchases" (
    "id" SERIAL NOT NULL,
    "owner_id" INTEGER NOT NULL,
    "compra" TEXT NOT NULL,
    "hora" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Purchases_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Purchases" ADD CONSTRAINT "Purchases_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
