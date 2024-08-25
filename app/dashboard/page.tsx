import React from 'react'
import LiveMarketPrice from "../../components/LiveMarketPrice";
import PredectionGraph from '@/components/PredectionGraph';
import {Header} from "../../components/Header";
import PredectionCard from '../../components/PredectionCard';

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <Header/>
   

   

   <div className="min-h-screen mt-12  p-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

          <div className='flex items-start justify-center '>
            <div className="flex flex-col lg:flex-row gap-6 w-full">
              <div className="flex-1">
                <LiveMarketPrice />
              </div>
              <div className="flex-1">
                {/* Add another card component here */}
                <PredectionCard/>
              </div>
            </div>
          </div>

          <div className='mt-6' >
            <PredectionGraph />
          </div>
        </div>
      </div>
    </>
  )
}

export default page;