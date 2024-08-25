
import { NextResponse,NextRequest } from "next/server";
import GetJsonData from "../../Actions/Jsondata";


export const GET = async (req: NextRequest) => {


    const data = await GetJsonData();

    return NextResponse.json({data});

};