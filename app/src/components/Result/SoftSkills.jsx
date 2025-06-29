import React from "react";
import { useLocation } from "react-router-dom";
import './softSkills-custom.css'

const SoftSkills = () => {
    const location = useLocation();
    const {count}= location.state
     const entryArray = Object.entries(count);
     entryArray.sort((a,b)=>
        b[1]-a[1])
     const topSkills= entryArray.slice(0,6)
     console.log(topSkills)
     const skillsText = {
        "Initiative": "You proactively tackle challenges and seize opportunities for improvement, leading the way in new ventures.",
        "Adaptability": "You adjust to new conditions with ease, seamlessly transitioning between tasks and challenges.",
        "Passionate": "Your enthusiasm and energy inspire others, bringing a positive drive to everything you undertake.",
        "Empathy": "You understand and share the feelings of others, creating an inclusive and supportive environment around you.",
        "Emotional Intelligence": "You manage your emotions intelligently and respond to others sensitively, fostering positive interactions and relationships.",
        "Goal Setting": "You define clear, achievable objectives that guide your path to success and motivate continual progress.",
        "Patience": "You approach situations calmly and are willing to take the necessary time to achieve the best outcome.",
        "Flexibility": "You adapt strategies and thoughts when necessary, showing a great capacity to handle change and uncertainty.",
        "Communication": "You express your thoughts clearly and listen attentively, ensuring effective and constructive exchanges.",
        "Collaboration": "You excel in working with others, leveraging collective strengths to achieve shared goals.",
        "Curiosity": "Your desire to learn and understand more drives you to continuously seek out new knowledge and experiences.",
        "Resilience": "You bounce back from setbacks with determination, learning from each experience and growing stronger.",
        "Independence": "You thrive on self-sufficiency, using your skills and resources to make informed decisions and achieve your goals.",
        "Integrity": "You act with honesty and strong moral principles, earning the respect and trust of those around you.",
        "Self-Reflection": "You regularly evaluate your actions and decisions, always looking for ways to improve and develop.",
        "Critical Thinking": "You think deeply and evaluate situations from multiple perspectives to form well-rounded and thoughtful conclusions.",
        "Decision-Making": "You make informed choices confidently, ensuring that each decision leads towards your desired outcomes.",
        "Delegation": "You effectively distribute tasks, trusting in the abilities of others while enhancing team capability and efficiency.",
        "Creativity": "You think outside the box, bringing unique and innovative ideas to the table that spark inspiration and lead to extraordinary results."
      }

   return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-normal">Soft Skills Assessment</h3>
          <h4 className="text-lg md:text-xl mt-2">Your Unique And Amazing Skills Set</h4>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {topSkills.map((skill, i) => (
            <div 
              key={i}
             className={`rounded-xl p-6 text-center ${
             i === 0 || i === 3
             ? "bg-[#F5FF82] shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
             : i === 1 || i === 4
             ? "bg-[#2C2B2B] text-white shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
             : "bg-white shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
}`}

            >
              <h4 className="text-xl font-bold mb-3">{skill[0]}</h4>
              <p className="text-base">{skillsText[skill[0]]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default SoftSkills