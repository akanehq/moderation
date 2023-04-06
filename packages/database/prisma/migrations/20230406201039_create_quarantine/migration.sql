-- CreateTable
CREATE TABLE "Quarantine" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "guildId" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "reason" TEXT,

    CONSTRAINT "Quarantine_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Quarantine_id_key" ON "Quarantine"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Quarantine_guildId_key" ON "Quarantine"("guildId");

-- AddForeignKey
ALTER TABLE "Quarantine" ADD CONSTRAINT "Quarantine_guildId_fkey" FOREIGN KEY ("guildId") REFERENCES "Guild"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
