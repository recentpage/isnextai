-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Fields" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "placeholder" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "fieldid" TEXT NOT NULL,
    "fieldclass" TEXT NOT NULL,
    "textrows" TEXT,
    "textcols" TEXT
);
INSERT INTO "new_Fields" ("fieldclass", "fieldid", "id", "name", "placeholder", "textcols", "textrows", "type") SELECT "fieldclass", "fieldid", "id", "name", "placeholder", "textcols", "textrows", "type" FROM "Fields";
DROP TABLE "Fields";
ALTER TABLE "new_Fields" RENAME TO "Fields";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
