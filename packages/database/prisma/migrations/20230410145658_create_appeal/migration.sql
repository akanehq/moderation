-- CreateEnum
CREATE TYPE "GuildFeature" AS ENUM ('Appealable');

-- AlterTable
ALTER TABLE "Guild" ADD COLUMN     "appealChannelId" TEXT,
ADD COLUMN     "features" "GuildFeature"[];

-- CreateTable
CREATE TABLE "Appeal" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "guildId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "punishmentId" INTEGER NOT NULL,
    "messageId" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "accepted" BOOLEAN,

    CONSTRAINT "Appeal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomVoice" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "guildId" TEXT NOT NULL,
    "categoryID" TEXT NOT NULL,
    "parentID" TEXT NOT NULL,
    "template" TEXT,

    CONSTRAINT "CustomVoice_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Appeal_id_key" ON "Appeal"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Appeal_punishmentId_key" ON "Appeal"("punishmentId");

-- CreateIndex
CREATE UNIQUE INDEX "CustomVoice_id_key" ON "CustomVoice"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CustomVoice_categoryID_key" ON "CustomVoice"("categoryID");

-- CreateIndex
CREATE UNIQUE INDEX "CustomVoice_parentID_key" ON "CustomVoice"("parentID");

-- AddForeignKey
ALTER TABLE "Appeal" ADD CONSTRAINT "Appeal_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appeal" ADD CONSTRAINT "Appeal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appeal" ADD CONSTRAINT "Appeal_punishmentId_fkey" FOREIGN KEY ("punishmentId") REFERENCES "Punishment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomVoice" ADD CONSTRAINT "CustomVoice_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
