import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const newAds = await prisma.ads.create({
        data: {
            fullName: body.fullName,
            email: body.email,
            companyName: body.companyName,
            phoneNumber: body.phoneNumber,
            additionalInfo: body.additionalInfo || "",
            duration: body.duration,
            interestedIn: body.interestedIn["0"],
            startDate: body.startDate,
            endDate: body.endDate
        }
    });

    if (!newAds) {
        return NextResponse.json({ message: "Something went wrong try again", success: false }, { status: 201 });
    }

    return NextResponse.json({ message: "ads created successfully", success: true }, { status: 201 });
  } catch (error: unknown) {
    console.log(error);
    
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}