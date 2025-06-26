// ResultIndex.jsx
import React from "react";
import ResultHero from "../components/Result/ResultHero";
import Content from "../components/Result/Content";
import TopSoftSkills from "../components/Result/TopSoftSkills";
import SoftSkillsText from "../components/Result/SoftSkillsText";
import SoftSkills from "../components/Result/SoftSkills";
import EmailMe from "../components/Result/EmailMe";
import Header from "../components/Nav/Header";
import Footer from "../components/Footer/Footer";

const ResultIndex = () => {
  return (
    <>
      <Header/>
      <main className="overflow-hidden">
        <div id="result-container" className="container mx-auto px-4">  
          <ResultHero/>
          <Content/>
          <TopSoftSkills/>
          <SoftSkillsText/>
          <SoftSkills/>
        </div>
        <EmailMe/>
      </main>
      <Footer/>
    </>
  )
}

export default ResultIndex;