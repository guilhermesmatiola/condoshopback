-- AddForeignKey
ALTER TABLE "Values" ADD CONSTRAINT "Values_value2_fkey" FOREIGN KEY ("value2") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
