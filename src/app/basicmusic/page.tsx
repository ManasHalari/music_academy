"use client"

import { BackgroundGradient } from "@/components/ui/background-gradient"
import Link from "next/link"
import ragaData from "@/data/basic_music.json"

interface Raga{
        id:number,
        name: string,
        thaat: string,
        arohana: string[],
        avarohana: string[],
        vadi: string,
        samvadi: string
}


function page() {
  return (
    <div className="min-h-screen bg-slate-800 py-12 pt-36">
         <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Basic Music Theory</h1>
         <h2 className="text-md md:text-4xl text-center font-sans font-bold mb-8 text-white">Different Ragas</h2>

         <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {ragaData.ragas.map((course:Raga)=> (
                <div key={course.id} className="flex justify-center">
                    <BackgroundGradient
                    className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                        <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                            <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">Name:{course.name}</p>
                            <p className="text-lg sm:text-xl mt-4 mb-1 text-neutral-600 dark:text-neutral-400 flex-grow">Thaat:{course.thaat}</p>
                            <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                Arohana:{course.arohana.join(" ")}
                            </p>
                            <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            Avarohana:{course.avarohana.join(" ")}
                            </p>
                            <strong 
                            className=" text-yellow-50"
                            >
                            Vadi:{course.vadi}
                            </strong>
                            <strong 
                            className="text-yellow-50"
                            >
                            Samvadi:{course.samvadi}
                            </strong>
                        </div>
                    </BackgroundGradient>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default page