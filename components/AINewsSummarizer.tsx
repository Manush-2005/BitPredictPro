
"use client";
import React from 'react'
import { Card, CardContent, CardHeader,CardDescription,CardTitle,CardFooter } from "./ui/card";
import { useState,useEffect } from 'react';
import { Badge } from "./ui/badge";
import axios from 'axios';
import {Header} from './Header';
import ReactMarkdown from 'react-markdown';
import { InfoIcon,CheckCircle } from "lucide-react"




const AINewsSummarizer = () => {
  const [summary, setSummary] = useState('');
  const [verdict, setVerdict] = useState('');


  const getdata = async () => {

    const res = await axios.get("/api/PostSummaryofAI");
    console.log(res.data);
    setSummary(res.data.news);
    setVerdict(res.data.summary);


  };

  useEffect(() => {

    getdata();


  },[]);



  return (


    <>

{summary && verdict ? (
  <Card className="max-w-2xl mx-auto p-6 shadow-lg rounded-lg ">
  <CardHeader className="flex flex-col items-start">
    <CardTitle className="text-2xl font-bold">AI News Summarizer</CardTitle>
    <CardDescription className="text-sm text-gray-500">Summary of articles for today</CardDescription>
  </CardHeader>
  <CardContent className="mt-4">
  <div className="flex items-center mb-2">
          <InfoIcon className="h-6 w-6 text-blue-500 mr-2" />
          <h2 className="text-xl font-semibold">Summary</h2>
        </div>
    <ReactMarkdown className="text-lg">{summary || 'Loading summary...'}</ReactMarkdown>
  </CardContent>
  <CardFooter className="mt-4">
  <div className="flex items-center mb-2">
          <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
          <h2 className="text-xl font-semibold">Final Verdict</h2>
        </div>
    <ReactMarkdown className="text-lg">{verdict || 'Loading verdict...'}</ReactMarkdown>
  </CardFooter>
</Card>
):(
  <Card className="max-w-2xl mx-auto p-6 shadow-lg rounded-lg bg-white">
  <CardHeader className="flex flex-col items-start">
    <CardTitle className="text-2xl font-bold">AI News Summarizer</CardTitle>
    <CardDescription className="text-sm text-gray-500">Summary of articles for today</CardDescription>
  </CardHeader>
  <CardContent className="mt-4">
    <p className="text-lg">Loading summary...</p>
  </CardContent>
  <CardFooter className="mt-4">
    <Badge className="text-lg">Loading verdict...</Badge>
  </CardFooter>
</Card>
)}
    


    
    </>
  
  )
}

export default AINewsSummarizer