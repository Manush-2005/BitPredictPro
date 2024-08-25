import { NextRequest,NextResponse } from "next/server";
import GetPastWeekData from "../../Actions/GetPastWeekData";


export const GET = async (req: NextRequest) => {

    const data = await GetPastWeekData();

    return NextResponse.json(data);



};