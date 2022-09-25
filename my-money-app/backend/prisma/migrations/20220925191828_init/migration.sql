-- CreateTable
CREATE TABLE "Credito" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "valor" DECIMAL NOT NULL DEFAULT 0,
    "idCicloPagamento" INTEGER NOT NULL,
    CONSTRAINT "Credito_idCicloPagamento_fkey" FOREIGN KEY ("idCicloPagamento") REFERENCES "CicloPagamento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Debito" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "valor" DECIMAL NOT NULL DEFAULT 0,
    "status" TEXT NOT NULL DEFAULT 'PENDENTE',
    "idCicloPagamento" INTEGER NOT NULL,
    CONSTRAINT "Debito_idCicloPagamento_fkey" FOREIGN KEY ("idCicloPagamento") REFERENCES "CicloPagamento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CicloPagamento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "mes" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL
);
