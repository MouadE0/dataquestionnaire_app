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

-- CreateTable
CREATE TABLE "Forms" (
    "id" SERIAL NOT NULL,
    "section" TEXT,
    "indicator" TEXT,
    "definition" TEXT,
    "unitCode" TEXT,
    "unit" TEXT,
    "choices" TEXT,
    "value" TEXT,
    "notAvailable" TEXT,
    "currentComments" TEXT,
    "newComment" TEXT,
    "conditionalityRule" TEXT,

    CONSTRAINT "Forms_pkey" PRIMARY KEY ("id")
);
