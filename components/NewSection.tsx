"use client";
import React from 'react'
import { Card, CardContent, CardHeader } from "./ui/card";
import { useState,useEffect } from 'react';
import { Badge } from "./ui/badge";
import axios from 'axios';
import {Header} from './Header';
import AINewsSummarizer from './AINewsSummarizer';
import Link from 'next/link';


type newsdata = {
   author: string | null;
   content: string | null;
   description: string | null;
    publishedAt: string | null;
    source:{
        id: string | null;
        name: string | null;
    };
    title: string | null;
    url: string | null;
    urlToImage: string | null;
};




const NewSection = () => {

    const [newsdata, setNewsData] = useState<newsdata[]>([]);


    const getNewsData = async () => {

        const res = await axios.get("/api/GetBitcoinNews");
        console.log(res.data);
        setNewsData(res.data);



    };


    useEffect(() => {

        getNewsData();


    }, []);



  return (
    <>
   
    <div className="container mx-auto px-4 py-8 ">
       
      {/* Featured Article */}
      <div className="mb-8 mt-12">
       
        <AINewsSummarizer />
      </div>

      <div className="mb-8">
      <h2 className="text-3xl font-bold mb-4">News Section</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {newsdata ? (
        <>
        <Link href={newsdata[0]?.url || "/" }>
          <Card>
          <CardContent className="p-0">
            <img src={newsdata[0]?.urlToImage} alt="Woman" />
          </CardContent>
          <CardHeader>
            <Badge className="mb-2 bg-purple-100 text-purple-800">{newsdata[0]?.source.name}</Badge>
            <h3 className="text-xl font-semibold mb-2">{newsdata[0]?.title}</h3>
            <div className="flex items-center">
              <span className="text-sm text-gray-500">{newsdata[0]?.author} • {newsdata[0]?.publishedAt}</span>
            </div>
          </CardHeader>
        </Card>
        </Link>

        <Link href={newsdata[1]?.url || "/" }>

        <Card>
          <CardContent className="p-0">
            <img src={newsdata[1]?.urlToImage} alt="Woman" />
          </CardContent>
          <CardHeader>
            <Badge className="mb-2 bg-purple-100 text-purple-800">{newsdata[1]?.source.name}</Badge>
            <h3 className="text-xl font-semibold mb-2">{newsdata[1]?.title}</h3>
            <div className="flex items-center">
              <span className="text-sm text-gray-500">{newsdata[1]?.author} • {newsdata[1]?.publishedAt}</span>
            </div>
          </CardHeader>
        </Card>

        </Link>

        <Link href={newsdata[2]?.url || "/" }>

        <Card>
          <CardContent className="p-0">
            <img src={newsdata[2]?.urlToImage} alt="Woman" />
          </CardContent>
          <CardHeader>
            <Badge className="mb-2 bg-purple-100 text-purple-800">{newsdata[0]?.source.name}</Badge>
            <h3 className="text-xl font-semibold mb-2">{newsdata[0]?.title}</h3>
            <div className="flex items-center">
              <span className="text-sm text-gray-500">{newsdata[0]?.author} • {newsdata[0]?.publishedAt}</span>
            </div>
          </CardHeader>
        </Card>

        </Link>

        <Link href={newsdata[3]?.url || "/" }>
        <Card>
          <CardContent className="p-0">
            <img src={newsdata[3]?.urlToImage} alt="Woman" />
          </CardContent>
          <CardHeader>
            <Badge className="mb-2 bg-purple-100 text-purple-800">{newsdata[1]?.source.name}</Badge>
            <h3 className="text-xl font-semibold mb-2">{newsdata[1]?.title}</h3>
            <div className="flex items-center">
              <span className="text-sm text-gray-500">{newsdata[1]?.author} • {newsdata[1]?.publishedAt}</span>
            </div>
          </CardHeader>
        </Card>
        </Link>
        </>
      ): (
        <div className="text-center">Loading...</div>
      )}
      </div>
      </div>
    </div>
    </>
  )
}

export default NewSection