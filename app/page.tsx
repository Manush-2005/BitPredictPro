import Image from "next/image";
import { Header } from "@/components/Header";
import Link from "next/link";
import { NewspaperIcon,User2,Calendar,CheckCircle,Lightbulb } from "lucide-react";

export default function Home() {
  return (
  <>
  
  

 
   


    <Header />
 

  <div className="flex flex-col gap-8 pb-8 md:gap-16 md:pb-16 xl:pb-24 bg-black">
 

      <div className="flex flex-col items-center justify-center max-w-3xl px-8 mx-auto mt-8 sm:min-h-screen sm:mt-0 sm:px-0">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <Link
            href="https://github.com/Manush-2005/BitPredictPro"
            className="text-zinc-400 relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-zinc-100/10 hover:ring-zinc-100/30 duration-150"
          >
            BitPredictProV2 is Open Source on{" "}
            <span className="font-semibold text-zinc-200">
              GitHub <span aria-hidden="true">&rarr;</span>
            </span>
          </Link>
        </div>
        <div>
          <h1 className="py-4 text-5xl font-bold tracking-tight text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/50 to-white sm:text-7xl">
          Predict Tomorrow's Bitcoin Price with Confidence
          </h1>
          <p className="mt-6 leading-5 text-zinc-600 sm:text-center">
              {/* Add the last updated date here */}
              <div className="flex items-center justify-center mt-4 text-sm text-zinc-400">
                <Calendar className="mr-2" />
                <span className="font-bold">Last updated till October 10, 2023  </span>
              </div>
            </p>
          <p className="mt-6 leading-5 text-zinc-600 sm:text-center">
          Receive real-time Bitcoin price updates and summaries of the latest news, all explained by AI. Never miss a beat with our notification system—enter your email, and we'll keep you informed.
          </p>
          <div className="flex flex-col justify-center gap-4 mx-auto mt-8 sm:flex-row sm:max-w-lg ">
            <Link
              href="/News"
              className="sm:w-1/2 sm:text-center inline-block space-x-2 rounded px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-white  ring-1 ring-zinc-600 hover:bg-white hover:text-zinc-900 duration-150 hover:ring-white hover:drop-shadow-cta"
            >
            Explore News 
            </Link>
            <Link
              href="/Dashboard"
              className="sm:w-1/2 sm:text-center inline-block transition-all space-x-2  rounded px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-zinc-800   bg-zinc-50 ring-1 ring-transparent hover:text-zinc-100 hover:ring-zinc-600/80  hover:bg-zinc-900/20 duration-150 hover:drop-shadow-cta"
            >    <span>Go to Dashboard</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>

    <div className="container py-24 lg:py-32">
          <h2 className="py-4 text-3xl font-bold text-center text-zinc-300">Why I built this project?</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-zinc-400">
            <div className="flex items-start">
              <CheckCircle className="mr-3 text-green-500" />
              <p>While learning LSTM , also to apply the knowledge</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="mr-3 text-green-500" />
              <p>To build a robust and scalable application using modern web technologies like Next.js and Tailwind CSS.</p>
            </div>
            <div className="flex items-start">
              <CheckCircle className="mr-3 text-green-500" />
              <p>To contribute to the open-source community and collaborate with other developers.</p>
            </div>
            <div className="flex items-start">
              <Lightbulb className="mr-3 text-yellow-500" />
              <p>Learnings: Improved my skills in data analysis, API integration, and responsive design.</p>
            </div>
            <div className="flex items-start">
              <Lightbulb className="mr-3 text-yellow-500" />
              <p>Learnings: Gained experience in deploying and maintaining a live web application.</p>
            </div>
          </div>
        </div>



    <h2 className="py-4 text-3xl font-bold text-center text-zinc-300 ">Features of BitPredictProV2</h2>
    <div className="container py-24 lg:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
            <div className=" space-y-6 lg:space-y-10">
          

            {/* AI summarizer feature card */}
              <div className="flex">
                <NewspaperIcon className="flex-shrink-0 mt-2 h-8 w-8" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    AL News Summarizer
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Get the latest news on Bitcoin and other cryptocurrencies
                    summarized by our AI to keep you informed.
                  </p>
                </div>
              </div>


             
            </div>
            <div className=" space-y-6 lg:space-y-10">
            {/* ML summarizer feature card */}
            <div className="flex">
                <User2 className="flex-shrink-0 mt-2 h-8 w-8" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                    ML Model Predictions
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Our machine learning model predicts the future price of
                    Bitcoin along with trends.
                  </p>
                </div>
              </div>
              </div>
           
          </div>
         

          {/* End Grid */}
        </div>
   </div>





  </div>
  
  
  </>
  );
}
