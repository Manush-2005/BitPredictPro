"use client";
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { AArrowDown,AArrowUpIcon,Bitcoin } from 'lucide-react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import clsx from 'clsx';

type BTCDATA = {
    timestamp: number;
    actual: number;
    prediction: number;
}


const PredectionCard = () => {

    const [LatestBTC, setLatestBTC] = useState<BTCDATA>();
    const [isBuySignal, setIsBuySignal] = useState(false);


    const pastweekdatahandler = async () => {

        const res = await axios.get("/api/GetlatestBTC");
    console.log(res.data.data);
       setLatestBTC(res.data.data);
    
      };
    
      function convertUnixToDate(unixTimestamp:any) {
        const date = new Date(unixTimestamp);
        return date.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
      }
    
      
    
      useEffect(() => {

        
        pastweekdatahandler();
    
      }, []);






    
  return (
//     <Card className="max-w-md mx-auto p-4 shadow-lg rounded-lg">
//     <CardHeader className="flex items-center justify-between">
//       <CardTitle className="text-xl font-bold">Bitcoin Price Prediction for Today</CardTitle>
//       {LatestBTC?.prediction ? (
//         <AArrowUpIcon className="h-6 w-6 text-green-500" />
//       ) : (
//         <AArrowDown className="h-6 w-6 text-red-500" />
//       )}
//     </CardHeader>
//     <CardContent className="mt-4">
//     {/* <p className="text-lg">Date: {LatestBTC ? formatDate(LatestBTC.timestamp) : 'Loading...'}</p> */}
//         <p className="text-lg">Close Price of Yesterday: {LatestBTC ? `$${LatestBTC.actual}` : 'Loading...'}</p>
//         <p className="text-lg">Today's Prediction Price : {LatestBTC ? `$${LatestBTC.prediction}` : 'Loading...'}</p>
//       <p className="text-lg">
//         {LatestBTC?.prediction ? 'Buy Signal' : 'Sell Signal'}
//       </p>
//     </CardContent>
//     <CardFooter className="mt-4">
//       <p className="text-sm text-gray-500">Updated just now</p>
//     </CardFooter>
//   </Card>

<Card className="max-w-md mx-auto p-4 shadow-lg rounded-lg">
<CardHeader className="flex items-center space-x-4">
  <Bitcoin className="h-6 w-6" />
  <CardTitle>Today Bitcoin Price Predection</CardTitle>
  {LatestBTC && (
          <div
            className={clsx(
              'rounded-full p-2',
              (LatestBTC.prediction > LatestBTC.actual) ? 'bg-green-500' : 'bg-red-500'
            )}
          >
            {(LatestBTC.prediction > LatestBTC.actual) ? (
              <AArrowUpIcon className="h-4 w-4 text-white" />
            ) : (
              <AArrowDown className="h-4 w-4 text-white" />
            )}
          </div>
        )}
</CardHeader>
<CardContent className="space-y-4">
  <div className="flex justify-between">
    <p className="text-lg">Date:</p>
    <p className="text-lg">
      {LatestBTC ? `${convertUnixToDate(LatestBTC.timestamp)}` : 'Loading...'}
    </p>
  </div>
  <div className="flex justify-between">
    <p className="text-lg">Actual Close Price:</p>
    <p className="text-lg">
      {LatestBTC ? `$${LatestBTC.actual.toFixed(3)}` : 'Loading...'}
    </p>
  </div>
  <div className="flex justify-between">
    <p className="text-lg">Today's Prediction:</p>
    <p className="text-lg">
    {LatestBTC ? `$${LatestBTC.prediction.toFixed(3)}` : 'Loading...'}
    </p>
  </div>
</CardContent>
</Card>

    
   
  )
}

export default PredectionCard