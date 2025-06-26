// SoftSkillsText.jsx
import React from "react";
import './softSkillsText-custom.css'



const SoftSkillsText = () => {
  return (
    <section className="py-6 md:py-10 lg:py-12">
      <div className="mx-auto px-4 sm:px-6 max-w-3xl text-center">
        <p className="text-xs sm:text-sm uppercase tracking-wider mb-2 md:mb-3">
          YOUR TOP SKILLS
        </p>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-normal mb-4 md:mb-6">
          Soft Skills All Around
        </h3>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed md:leading-loose">
          After analyzing your results, we've identified the six soft skills that 
          resonate most with you. These skills complement your archetype and provide 
          deeper insight into your unique skill set. Recognizing these strengths 
          empowers you to leverage them effectively in your personal and professional life.
        </p>
      </div>
    </section>
  );
}

export default SoftSkillsText;