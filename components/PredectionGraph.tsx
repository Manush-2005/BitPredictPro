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

const PredectionGraph = () => {

  const [pastmonthdata, setPastmonthdata] = useState<PastWeekData[]>([]);

  const pastmonthdatahandler = async () => {

    const res = await axios.get("/api/GetLast30BTC");
   

    setPastmonthdata(res.data.data);

  };

  useEffect(() => {


    pastmonthdatahandler();

  }, []);

 





  return (
   <>

<Card
          className="flex flex-col lg:max-w-9xl h-auto" x-chunk="charts-01-chunk-1"
        >
            <CardHeader className="flex flex-col gap-4 space-y-0 pb-2">
        <div className="flex flex-row items-center gap-4 [&>div]:flex-1">
         
          <div>
            <CardTitle>Bitcoin Prediction Graph</CardTitle>
            
            
          </div>
        </div>
        <div>
          <CardDescription>
            This graph shows the actual vs predicted value of Bitcoin for the last month. Red - Actual. Blue - Predicted.
          </CardDescription>
        </div>
      </CardHeader>
          <CardContent className="flex flex-1 items-center">
            {/* {pastmonthdata.length > 0 && (
              <ChartContainer
              config={{
                // resting: {
                //   label: "Resting",
                //   color: "hsl(var(--chart-1))",
                // },
                actual: {
                  label: "Actual",
                  color: "hsl(var(--chart-1))",
                },
                prediction: {
                  label: "Prediction",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="w-full"
            >
             <LineChart
      accessibilityLayer
      margin={{
        left: 14,
        right: 14,
        top: 10,
      }}
      data={pastmonthdata.map((data)=>{
        return {
          date: data.timestamp,
          resting: data.actual,
          running: data.prediction,
        }
      })}
      >
        <CartesianGrid
          strokeDasharray="4 4"
          vertical={false}
          stroke="hsl(var(--muted-foreground))"
          strokeOpacity={0.5}
        /> <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />
      
        <Line
          dataKey="actual"
          type="natural"
          fill="red"
          stroke="red"
          strokeWidth={2}
          dot={false}
          activeDot={{
            fill: "red",
            stroke: "red",
            r: 4,
          }}
        /> <Line
        dataKey="prediction"
        type="natural"
        fill="blue"
        stroke="blue"
        strokeWidth={2}
        dot={false}
        activeDot={{
          fill: "blue",
          stroke: "blue",
          r: 4,
        }}
      />
      <ChartTooltip
        content={
          <ChartTooltipContent
            indicator="line"
            labelFormatter={(value) => {
              console.log(value);
              return new Date(value).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              });
            }}
          />
        }
       
      />
    </LineChart>
            </ChartContainer>

            )}
             */}
             {pastmonthdata.length > 0 && (
  <ChartContainer
    config={{
      actual: {
        label: "Actual",
        color: "hsl(var(--chart-1))",
      },
      prediction: {
        label: "Prediction",
        color: "hsl(var(--chart-2))",
      },
    }}
    className="w-full"
  >
    <LineChart
      accessibilityLayer
      margin={{
        left: 14,
        right: 14,
        top: 10,
      }}
      data={pastmonthdata.map((data) => {
        return {
          date: new Date(data.timestamp).toISOString(),
          actual: data.actual,
          prediction: data.prediction,
        };
      })}
    >
      <CartesianGrid
        strokeDasharray="4 4"
        vertical={false}
        stroke="hsl(var(--muted-foreground))"
        strokeOpacity={0.5}
      />
      <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />
      <Line
        dataKey="actual"
        type="natural"
        fill="red"
        stroke="red"
        strokeWidth={2}
        dot={false}
        activeDot={{
          fill: "red",
          stroke: "red",
          r: 4,
        }}
      />
      <Line
        dataKey="prediction"
        type="natural"
        fill="blue"
        stroke="blue"
        strokeWidth={2}
        dot={false}
        activeDot={{
          fill: "blue",
          stroke: "blue",
          r: 4,
        }}
      />
      <ChartTooltip
        content={
          <ChartTooltipContent
            indicator="line"
            labelFormatter={(value) => {
              console.log(value);
              return new Date(value).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              });
            }}
          />
        }
      />
    </LineChart>
  </ChartContainer>
)}
          </CardContent>
        </Card>
   
   
   </>
  )
}

export default PredectionGraph