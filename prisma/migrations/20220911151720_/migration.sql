/*
  Warnings:

  - You are about to drop the column `userIdT` on the `Cards` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Cards` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cards" DROP CONSTRAINT "Cards_userIdT_fkey";

-- AlterTable
ALTER TABLE "Cards" DROP COLUMN "userIdT",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
