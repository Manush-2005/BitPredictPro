import { NextRequest,NextResponse } from "next/server";
import { GetLatestBTCdata } from "../../Actions/GetBTCdata";


export const GET = async (req: NextRequest) => {

    const data = await GetLatestBTCdata();

    return NextResponse.json({data});
};