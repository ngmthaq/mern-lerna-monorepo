-- CreateTable
CREATE TABLE "ApiKey" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "userUuid" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ApiKey_userUuid_fkey" FOREIGN KEY ("userUuid") REFERENCES "User" ("uuid") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Project" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "userUuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Project_userUuid_fkey" FOREIGN KEY ("userUuid") REFERENCES "User" ("uuid") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProjectMember" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "projectUuid" TEXT NOT NULL,
    "userUuid" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'MEMBER',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "ProjectMember_projectUuid_fkey" FOREIGN KEY ("projectUuid") REFERENCES "Project" ("uuid") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ProjectMember_userUuid_fkey" FOREIGN KEY ("userUuid") REFERENCES "User" ("uuid") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Locale" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Message" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "projectUuid" TEXT NOT NULL,
    "localeUuid" TEXT NOT NULL,
    "userUuid" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Message_projectUuid_fkey" FOREIGN KEY ("projectUuid") REFERENCES "Project" ("uuid") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Message_userUuid_fkey" FOREIGN KEY ("userUuid") REFERENCES "User" ("uuid") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Message_localeUuid_fkey" FOREIGN KEY ("localeUuid") REFERENCES "Locale" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ApiKey_key_key" ON "ApiKey"("key");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectMember_projectUuid_userUuid_key" ON "ProjectMember"("projectUuid", "userUuid");

-- CreateIndex
CREATE INDEX "Message_projectUuid_idx" ON "Message"("projectUuid");

-- CreateIndex
CREATE INDEX "Message_localeUuid_idx" ON "Message"("localeUuid");

-- CreateIndex
CREATE INDEX "Message_key_idx" ON "Message"("key");

-- CreateIndex
CREATE UNIQUE INDEX "Message_projectUuid_localeUuid_key_key" ON "Message"("projectUuid", "localeUuid", "key");
