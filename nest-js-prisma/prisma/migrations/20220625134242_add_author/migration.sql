-- AlterTable
ALTER TABLE "books" ADD COLUMN     "Authorid" INTEGER;

-- CreateTable
CREATE TABLE "author" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "author_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_Authorid_fkey" FOREIGN KEY ("Authorid") REFERENCES "author"("id") ON DELETE SET NULL ON UPDATE CASCADE;
