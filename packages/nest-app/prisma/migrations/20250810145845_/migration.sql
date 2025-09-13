/*
  Warnings:

  - Added the required column `logoUrl` to the `Locale` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Locale" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "logoUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Locale" ("createdAt", "name", "updatedAt", "uuid") SELECT "createdAt", "name", "updatedAt", "uuid" FROM "Locale";
DROP TABLE "Locale";
ALTER TABLE "new_Locale" RENAME TO "Locale";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
