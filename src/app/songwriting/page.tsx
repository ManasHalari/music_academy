"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import songwritingData from "@/data/songwriting_music.json"


function SongWriting() {
  
  return (
    <div className="min-h-screen bg-gray-800 py-12 pt-36">
      <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.2}
          particleDensity={1600}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl md:text-7xl text-center font-sans font-bold mb-8 text-white">Songwriting</h1>
        <h2 className="mt-2 text-lg leading-8 font-extrabold tracking-tight text-neutral-300 sm:text-xl md:text-4xl">Basic knowledge how to do songwriting</h2>
      </div>
      <div className="mt-10">
          <HoverEffect
          items={songwritingData.fields_in_songwriting.map(song => (
            {
              title: song.title,
              description: song.description,
              link: '/songwriting'
            }
          ))}
          />
          </div>
      </div>
      </div>
  )
}

export default SongWriting;