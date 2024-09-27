import React from 'react'
import LiveMarketPrice from "../../components/LiveMarketPrice";
import PredectionGraph from '@/components/PredectionGraph';
import {Header} from "../../components/Header";
import PredectionCard from '../../components/PredectionCard';
import { Card,CardHeader,CardTitle,CardContent } from '@/components/ui/card';

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <Header/>
   

   

   {/* <div className="min-h-screen mt-12  p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6"> Bitcoin V2 Dashboard</h1>

          <div className='flex items-start justify-center '>
            <div className="flex flex-col lg:flex-row gap-6 w-full">
              <div className="flex-1">
                <LiveMarketPrice />
              </div>
              <div className="flex-1">
                
                <PredectionCard/>
              </div>
            </div>
          </div>

          <div className='mt-6' >
            <PredectionGraph />
          </div>
        </div>
      </div> */}

<div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8 ">BitPredictProV2 Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <LiveMarketPrice/>
        
        <PredectionCard/>
      </div>
      
   
      <PredectionGraph/>
      </div>
    </>
  )
}

export default page;