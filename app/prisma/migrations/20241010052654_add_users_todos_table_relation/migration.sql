-- AddForeignKey
ALTER TABLE "todos" ADD CONSTRAINT "todos_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
