// src/navigation/Index.js
import React from 'react'
import Hero from '../components/homepage/Hero'
import OurVision from '../components/homepage/OurVision'
import HomepageGuide from '../components/homepage/HomepageGuide'
import Storytelling from '../components/homepage/Storytelling'
import Header from "../components/Nav/Header"
import Footer from "../components/Footer/Footer"

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow space-y-10 md:space-y-16"> {/* Added consistent spacing */}
        <Hero />
        <OurVision />
        <HomepageGuide />
        <Storytelling /> 
      </main>
      <Footer />
    </div>
  )
}

export default Index