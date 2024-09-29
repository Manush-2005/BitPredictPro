import { NextRequest,NextResponse } from "next/server";
import axios from "axios";



export const GET = async (req: NextRequest) => {

    const todaydate = new Date();
    const fivedaysfromtoday = new Date(todaydate);
    fivedaysfromtoday.setDate(todaydate.getDate() - 25);
    


    
    const response = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&sortBy=popularity&apiKey=d4eb2726b9664b838fc24a091c4d2ba8`);
    const data = response.data;

    const articles = data.articles;
    
    const top10articles = articles.slice(0, 10);
   

    return NextResponse.json(top10articles);







};
