"use client"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const data={
    "music_production_elements": [
      {
        "title": "The Art of Recording",
        "name": "Audio Recording",
        "quote": "Recording engineers capture the essence of music by skillfully setting up microphones, considering room acoustics, and mastering signal flow."
      },
      {
        "title": "The Magic of Mixing",
        "name": "Mixing",
        "quote": "Mixing engineers blend individual tracks into a harmonious whole, using EQ, compression, and spatial effects to craft a balanced and dynamic sound."
      },
      {
        "title": "The Finishing Touch",
        "name": "Mastering",
        "quote": "Mastering engineers refine the final mix, ensuring it translates well across various playback systems and formats, achieving optimal loudness and clarity."
      },
      {
        "title": "Crafting Soundscapes",
        "name": "Sound Design",
        "quote": "Sound designers create unique sonic landscapes by manipulating synthesized and recorded audio, adding depth and atmosphere to multimedia projects."
      },
      {
        "title": "Harmony in Composition",
        "name": "Music Theory and Arrangement",
        "quote": "Arrangers shape musical ideas into cohesive compositions, applying principles of harmony, melody, and form to create memorable and impactful works."
      },
      {
        "title": "Power of Digital Workstations",
        "name": "Digital Audio Workstations (DAWs)",
        "quote": "Producers harness the power of digital audio workstations to record, edit, and mix music, employing MIDI programming and virtual instruments for creative expression."
      },
      {
        "title": "Precision in Editing",
        "name": "Editing",
        "quote": "Editors refine audio recordings through precise cutting, splicing, and time manipulation, ensuring seamless transitions and polished final products."
      },
      {
        "title": "Exploring Sonic Frontiers",
        "name": "Creative Effects Processing",
        "quote": "Sound engineers experiment with innovative effects like distortion, modulation, and pitch shifting, pushing sonic boundaries and crafting distinct sounds."
      },
      {
        "title": "Technical Expertise",
        "name": "Technical Knowledge",
        "quote": "Audio professionals possess in-depth knowledge of signal flow, gain staging, and audio routing, leveraging hardware and software to achieve optimal sound quality."
      }
    ]
  }
  
  
  

function MusicProduction() {
  return (
    <div className="min-h-screen bg-slate-800 py-10 pt-36 h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h1 className="text-white text-lg sm:text-2xl md:text-5xl font-bold text-center mb-8 z-10">Music Production</h1>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={data.music_production_elements}
                direction="right"
                speed="normal"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicProduction