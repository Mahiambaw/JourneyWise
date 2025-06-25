import React from 'react'
import Buttons from '../Buttons/Buttons'
import useShowSecNotice from '../../Hook/useShowSecNotice'

const Storytelling = () => {
  const [handleClick, ShowSecNotice] = useShowSecNotice();
  
  return (
    <div className="container flex flex-col items-center gap-8 px-4 py-12 mx-auto md:flex-row-reverse">
      <div className="w-full md:w-1/2">
        <img 
          src="/Rectangle 181.svg" 
          alt="Fists joining together" 
          className="object-cover w-full rounded-lg shadow-lg"
        />
      </div>
      
      <div className="w-full text-center md:text-left md:w-1/2">
        <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
          TAKE A STEP FORWARD IN YOUR JOURNEY
        </p>
        <h3 className="mt-2 text-2xl font-bold md:text-3xl">
          Humanity's Greatest Triumph Is Storytelling
        </h3>
        <p className="mt-4 text-gray-600">
          Step into the realm of self-discovery and empower yourself. It's time to shift from self-doubt to confidence, 
          from fear to courage, and ultimately from a sense of helplessness to redefining your narrative. Let us redefine 
          how you tell your story and show how unique and incredible you are.
        </p>
        
        <div className="mt-8">
          <Buttons 
            onClick={handleClick}
            primary 
            rounded 
            className="min-w-[223px] h-[45px] text-[14px] px-6 py-[13px] whitespace-nowrap"
          >
            Begin My Journey
          </Buttons>
        </div>
        
        <ShowSecNotice/>
      </div>
    </div>
  )
}

export default Storytelling