import React from 'react'

const HomepageGuide = () => {
  return (
    <div className="px-4 py-12 bg-gray-50">
      <div className="container mx-auto">
        <header className="mb-12 text-center">
          <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
            HERE'S HOW IT WORKS
          </p>
          <h3 className="mt-2 text-2xl font-bold md:text-3xl">
            Welcome To An Interactive & Fun Process
          </h3>
          <img 
            src="/Rectangle 304.svg" 
            alt="Laptop with hands pointing" 
            className="w-full max-w-2xl mx-auto mt-8 rounded-lg shadow-lg"
          />
        </header>
        
        <section className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: "/journeywise-icon-1.svg",
              title: "Discover Your Archetype",
              text: "Are you The Perfectionist, The Recluse, or The Soloist? Select the one that reflects your journey best."
            },
            {
              icon: "/journeywise-icon-2.svg",
              title: "Engage With Our Assessment",
              text: "Answer a few questions to reflect on your journey. Remember, to be honest as that helps us curate results crafted exclusively for you."
            },
            {
              icon: "/journeywise-icon-3.svg",
              title: "Unlock Your Results",
              text: "That's all there is to it! You are done. Use these results to redefine how you tell your story."
            }
          ].map((step, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <img 
                src={step.icon} 
                alt={`Step ${index + 1}`} 
                className="w-16 h-16 mb-4 mx-auto"
              />
              <h4 className="text-xl font-bold text-center">{step.title}</h4>
              <p className="mt-2 text-gray-600 text-center">
                {step.text}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default HomepageGuide