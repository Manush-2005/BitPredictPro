"use client";
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
  } from "../components/ui/chart";
  import { Separator } from "../components/ui/separator";
import axios from 'axios';
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Label,
    LabelList,
    Line,
    LineChart,
    PolarAngleAxis,
    RadialBar,
    RadialBarChart,
    Rectangle,
    ReferenceLine,
    XAxis,
    YAxis,
  } from "recharts";
  import {useState,useEffect} from 'react';


  type PastWeekData = {
    timestamp: number;
    actual: number;
    prediction: number;
  }



const LiveMarketPrice = () => {

  const [currentPrice, setCurrentPrice] = useState(0);
  const [pastweekdata, setPastweekdata] = useState<PastWeekData[]>([]);

  function convertUnixToDate(unixTimestamp:any) {
    const date = new Date(unixTimestamp);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  const currentPriceHandler = async () => {


    const res = await axios.get("https://api.coinpaprika.com/v1/coins/btc-bitcoin/ohlcv/today");
    console.log(res.data[0].close);
    setCurrentPrice(res.data[0].close);
  };

  const pastweekdatahandler = async () => {

    const res = await axios.get("/api/GetLastWeekData");
    

    setPastweekdata(res.data);

  };


  

  useEffect(() => {


    currentPriceHandler();
    pastweekdatahandler();

  }, []);








  return (
    <>

<Card
          className="lg:max-w-md  " 
        >
          <CardHeader className="space-y-0 pb-2">
            <CardDescription >Current Bitcoin Price</CardDescription>
            <CardTitle className="text-4xl tabular-nums">
              {currentPrice.toFixed(5)}{" "}
              
            </CardTitle>
          </CardHeader>
          <CardContent className='text-white'>

            {pastweekdata.length > 0 && (

<ChartContainer
config={{
  steps: {
    label: "Steps",
    color: "hsl(var(--chart-1))",
  },
}}
>
<BarChart
  accessibilityLayer
  margin={{
    left: -4,
    right: -4,
  }}
  data={[
    {
      date: pastweekdata[0].timestamp,
      steps: pastweekdata[0].actual,
    },
    {
      date: pastweekdata[1].timestamp,
      steps: pastweekdata[1].actual,
    },
    {
      date: pastweekdata[2].timestamp,
      steps: pastweekdata[2].actual,
    },
    {
      date: pastweekdata[3].timestamp,
      steps: pastweekdata[3].actual,
    },
    {
      date: pastweekdata[4].timestamp,
      steps: pastweekdata[4].actual,
    },
    {
      date: pastweekdata[5].timestamp,
      steps: pastweekdata[5].actual,
    },
    {
      date: pastweekdata[6].timestamp,
      steps: pastweekdata[6].actual,
    },
  ]}
>
  <Bar
    dataKey="steps"
    fill="var(--color-steps)"
    radius={5}
    fillOpacity={0.6}
    activeBar={<Rectangle fillOpacity={0.8} />}
  />
  <XAxis
    dataKey="date"
    tickLine={false}
    axisLine={false}
    tickMargin={4}
    tickFormatter={(value) => {
      const date = convertUnixToDate(value);
      return date;
      
    }}
  />
  <ChartTooltip
    defaultIndex={2}
    content={
      <ChartTooltipContent
        hideIndicator
        labelFormatter={(value) => {
          const date = convertUnixToDate(value);
          return date;
        }}
      />
    }
    cursor={false}
  />

   
  
  
  
</BarChart>
</ChartContainer>
              
            )}
           
          </CardContent>
          <CardFooter className="flex-col items-start gap-1">
            {pastweekdata.length > 0 && (

<CardDescription >
Over the past 7 days, Bitcoin price has increased been {" "}
<span className="font-medium text-foreground">{pastweekdata[6].actual - pastweekdata[0].actual}</span> USD.
</CardDescription>

            )}
           
            <Separator />
          </CardFooter>
        </Card>

    </>
  )
}

export default LiveMarketPrice