-- CreateTable
CREATE TABLE "Ads" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "trackingCode" TEXT,
    "companyName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "additionalInfo" TEXT,
    "interestedIn" TEXT NOT NULL,
    "image" TEXT,
    "duration" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ads_pkey" PRIMARY KEY ("id")
);
