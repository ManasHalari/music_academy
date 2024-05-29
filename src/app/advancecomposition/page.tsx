"use client"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect"

const data={
    "advanced_composition_elements": [
      {
        "title": "Advanced Harmony",
        "description": "Use of extended chords (9ths, 11ths, 13ths) and altered chords. Understanding and application of modal interchange, secondary dominants, and tritone substitutions."
      },
      {
        "title": "Counterpoint",
        "description": "Writing polyphonic textures where multiple independent melodies interact. Understanding species counterpoint and its rules."
      },
      {
        "title": "Form and Structure",
        "description": "Mastery of traditional forms (sonata, rondo, fugue) and development of original forms. Ability to manipulate and develop musical themes and motifs."
      },
      {
        "title": "Orchestration",
        "description": "Knowledge of instrument ranges, timbres, and techniques. Skill in arranging music for various ensembles, from solo instruments to full orchestra."
      },
      {
        "title": "Advanced Rhythm and Meter",
        "description": "Use of complex rhythms, polyrhythms, and mixed meters. Understanding of rhythmic modulation and metric displacement."
      },
      {
        "title": "Atonality and Serialism",
        "description": "Composing without a tonal center, using techniques such as twelve-tone serialism. Understanding and application of tone rows, serial transformations, and non-tonal harmony."
      },
      {
        "title": "Electronic and Computer Music",
        "description": "Use of electronic instruments and software for composition. Knowledge of sound synthesis, sampling, and digital audio processing."
      },
      {
        "title": "Improvisation",
        "description": "Advanced improvisational techniques in various musical styles. Understanding of how to incorporate improvisation into compositions."
      },
      {
        "title": "Music Analysis",
        "description": "Ability to analyze and understand the structure and elements of complex musical works. Applying analytical techniques to inform and improve compositional practice."
      },
      {
        "title": "Cultural and Historical Context",
        "description": "Understanding how historical and cultural contexts influence composition. Ability to draw on a wide range of musical traditions and styles."
      },
      {
        "title": "Advanced Lyricism",
        "description": "Crafting sophisticated and nuanced lyrics that complement complex musical structures. Using advanced poetic devices and themes."
      },
      {
        "title": "Interdisciplinary Collaboration",
        "description": "Working with artists from other disciplines (dance, film, theater) to create multidisciplinary works. Understanding the technical and creative demands of collaborative projects."
      },
      {
        "title": "Experimental Techniques",
        "description": "Exploring unconventional sounds and techniques, such as prepared instruments or extended vocal techniques. Pushing the boundaries of traditional music forms and structures."
      }
    ]
  }
  

function AdvanceComposition() {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    });
   
    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
  return (

    <div className="min-h-screen bg-slate-800 py-10 pt-36 h-[400vh] w-full dark:border dark:border-white/[0.1] rounded-md relative overflow-clip"
    ref={ref}
    >
         <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title="Advanced Composition"
        description="Dive into Advanced composition and enhance your skill"
      />
    <StickyScroll content={data.advanced_composition_elements} />
  </div>
  )
}

export default AdvanceComposition