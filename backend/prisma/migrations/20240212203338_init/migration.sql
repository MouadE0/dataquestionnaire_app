-- CreateTable
CREATE TABLE "Indicator" (
    "id" SERIAL NOT NULL,
    "theme" TEXT,
    "subtheme" TEXT,
    "indicator" TEXT,
    "description" TEXT,
    "entity" TEXT,
    "period" TEXT,
    "value" TEXT,
    "unit" TEXT,
    "supporting_doc_link" TEXT,
    "comment" TEXT,

    CONSTRAINT "Indicator_pkey" PRIMARY KEY ("id")
);
