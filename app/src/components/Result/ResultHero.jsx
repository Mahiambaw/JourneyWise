// ResultHero.jsx
import React from "react";
import './resultHero-custom.css'

const ResultHero = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-12">
          <div>
            <p className="font-dm-sans text-base md:text-lg mb-4">YOUR RESULTS</p>
            <h3 className="font-dm-serif-text text-2xl md:text-4xl lg:text-5xl font-normal capitalize mb-6">
              See Your Value & Change Your Perspective
            </h3>
          </div>
          <div>
            <p className="font-dm-sans text-base md:text-lg lg:text-xl text-gray-700">
              After a thorough analysis of your quiz assessment, we've uncovered a crucial insight: your self-perception may not fully reflect your true essence. Below, you will find a detailed profile that not only highlights your evolution but also delves deep into your capabilities. Explore your key skills, strengths, and goals, and identify the archetype that genuinely represents your journey. Embrace this chance to see yourself in a new light and step confidently toward your future career path.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResultHero;