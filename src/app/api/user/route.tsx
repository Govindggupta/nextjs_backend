import { NextRequest, NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        message: "this is how a backend api is made in nextjs"
    })
}

export async function POST(req: NextRequest) {
    
    const body = await req.json();

    // hit the entries to the backend
    return NextResponse.json({
        body
    })
}