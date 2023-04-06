-- CreateEnum
CREATE TYPE "ModerationLimitationKind" AS ENUM ('Any', 'Ban', 'Kick', 'Mute', 'Warn');

-- CreateTable
CREATE TABLE "ModerationLimitation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "guildId" TEXT NOT NULL,
    "kind" "ModerationLimitationKind" NOT NULL,
    "roleId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "expiresIn" INTEGER NOT NULL,

    CONSTRAINT "ModerationLimitation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ModerationLimitation_id_key" ON "ModerationLimitation"("id");

-- AddForeignKey
ALTER TABLE "ModerationLimitation" ADD CONSTRAINT "ModerationLimitation_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
