import React from 'react'

const OurVision = () => {
  return (
    <div className="container flex flex-col items-center gap-8 px-4 py-12 mx-auto md:flex-row">
      <div className="w-full md:w-1/2">
        <img 
          src="/Rectangle 180.svg" 
          alt="Person drawing with marker" 
          className="object-cover w-full rounded-lg shadow-lg"
        />
      </div>
      
      <div className="w-full md:w-1/2">
        <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
          OUR VISION
        </p>
        <h3 className="mt-2 text-2xl font-bold md:text-3xl">
          At JourneyWise, You're The Hero In Your Story
        </h3>
        <p className="mt-4 text-gray-600">
          You've been laid off, and that feeling hurts. It's a dark time where doubts have started to creep in, 
          confidence is at an all-time low, and uncertainty is overwhelming. But that's where we come in to help! 
          Let's redefine how you tell your story, empowering you to recognize and embrace the skills you've gained 
          during your career break.
        </p>
      </div>
    </div>
  )
}

export default OurVision