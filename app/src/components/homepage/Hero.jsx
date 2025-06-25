import React from 'react'
import Collage from './Collage'
import Buttons from '../Buttons/Buttons'
import useShowSecNotice from '../../Hook/useShowSecNotice'
import StickyButton from './StickyButton'

const Hero = () => {
  const [handleClick, ShowSecNotice] = useShowSecNotice();
  
  return (
    <header className="w-full py-6 md:py-10 px-4 max-w-7xl mx-auto">
      {/* Main content container */}
      <div className="flex flex-col-reverse items-center justify-between gap-6 md:flex-row md:gap-10">
        {/* Text content section - optimized spacing */}
        <section className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
          <div className="mb-4 md:mb-6">
            <h2 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
              Finding Your Path & Story
            </h2>
          </div>
          
          <div className="mb-6 md:mb-8">
            <p className="text-base text-gray-700 md:text-lg">
              During this time of uncertainty, let's redefine how you tell your story.
            </p>
          </div>
          
          <Buttons 
            id="lets-begin" 
            rounded 
            primary 
            className="w-full max-w-xs py-3 text-base md:py-4 md:text-lg md:max-w-sm"
            onClick={handleClick}
          >
            Begin My Journey
          </Buttons>
          
          <ShowSecNotice/>
        </section>
        
        {/* Collage section - optimized image fitting */}
        <section className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-md aspect-square md:aspect-auto">
            <Collage />
          </div>
        </section>
      </div>
      
      <StickyButton />
    </header>
  )
}

export default Hero