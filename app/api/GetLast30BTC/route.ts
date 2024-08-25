import { NextResponse,NextRequest } from "next/server";
import GetLast30data from "../../Actions/GetLast30data";


export const GET = async (req: NextRequest) => {

    const data = await GetLast30data();

    return NextResponse.json({data});

};


