import { NextRequest,NextResponse } from "next/server";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";
import axios from "axios";


const llm = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-pro",
    temperature: 0,
    maxRetries: 2,
  
  });


  const prompt1 = PromptTemplate.fromTemplate(
    `You are an AI news summarizer. You summarize news articles about Bitcoin.
    The JSON data contains the title and description of the news articles.
    Ignore the articles that are not related to Bitcoin.
    Just give summary based on given info.
    Here are the articles:
    {newsdata}
    Give output less then 100 words.
    `
  );

  const prompt2 = PromptTemplate.fromTemplate(

   `Based on the summary of varoius articles,you give advice to user if it good to invest in bitcoin now or not.Also give reasons for your judgement.
   Give output less then 100 words.
   
   Summary of articles:{summary}`
  );





export const GET = async (req: NextRequest) => {

  const newsdata = await axios.get("/api/GetBitcoinNews");

  const news = newsdata.data;

  const formatteddata = news.map((news:any) => {

 return{
  title:news.title,
  description:news.description,
 }
  });


  const formattedNews = await prompt1.format({
    newsdata:JSON.stringify(formatteddata),
  });

  const res = await llm.invoke(formattedNews);

  const summary = res.content;

  const formattedSummary = await prompt2.format({
    summary:summary,
  });

  const res2 = await llm.invoke(formattedSummary);

  return NextResponse.json({summary:res2.content,news:res.content});

  

  



    


};