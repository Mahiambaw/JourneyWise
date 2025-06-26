import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import TopSkillsText from "./TopSoftSkillsText";
import './topSoftSkills-custom.css'
import data from "../../Data/top_softskills.json"

// Import all icons
import lightbulbD from "/journeywise-icon-lightbulb-dark.svg"; 
import lightbulbL from "/journeywise-icon-lightbulb-light.svg"; 
import gearD from "/journeywise-icon-gear-dark.svg"; 
import gearL from "/journeywise-icon-gear-light.svg"; 
import targetD from "/journeywise-icon-target-dark.svg";
import targetL from "/journeywise-icon-target-light.svg"; 

const TopSoftSkills = () => {
    const location = useLocation();
    const {arcTypeCount:{archeType}} = location.state;
    const [active, setActive] = useState("TopSkills");

    const handleClick = (skills) => {
        setActive(skills);
    };

    let newArch;
    switch (archeType) {
        case "The Soloist":
            newArch = "The Trailblazer";
            break;
        case "The Perfectionist":
            newArch = "The Pioneer";
            break;
        case "The Recluse":
            newArch = "The Seer";
            break;
        default:
            newArch = "The Trailblazer";
            break;
    }

    const getImage = (i, active) => {
        if (i === 2) {
            switch (active) {
                case "TopSkills": return lightbulbL;
                case "Strengths": return gearL;
                case "Goals": return targetL;
                default: return lightbulbL;
            }
        } else {
            switch (active) {
                case "TopSkills": return lightbulbD;
                case "Strengths": return gearD;
                case "Goals": return targetD;
                default: return lightbulbD;
            }
        }
    };

    return(
        <section className="py-8 md:py-12 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-6 md:mb-8">
                    <h3 className="text-xl md:text-3xl font-normal mb-2">Your Top Soft Skills</h3>
                    <h4 className="text-base md:text-lg">Toggle Below To Explore Your Unique Profile</h4>
                </div>
                
                <div className="flex justify-center gap-1 md:gap-2 mb-6 md:mb-8">
                    <button 
                        className={`px-3 py-1 md:px-4 md:py-2 text-xs md:text-base rounded-full ${active === "TopSkills" ? "bg-black text-white" : ""}`}
                        onClick={() => handleClick("TopSkills")}
                    >
                        TOP SKILLS
                    </button>
                    <button 
                        className={`px-3 py-1 md:px-4 md:py-2 text-xs md:text-base rounded-full ${active === "Strengths" ? "bg-black text-white" : ""}`}
                        onClick={() => handleClick("Strengths")}
                    >
                        STRENGTHS
                    </button>
                    <button 
                        className={`px-3 py-1 md:px-4 md:py-2 text-xs md:text-base rounded-full ${active === "Goals" ? "bg-black text-white" : ""}`}
                        onClick={() => handleClick("Goals")}
                    >
                        GOALS
                    </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {data[newArch][active].map((el, i) => (
                        <div 
                            key={i}
                            className={`rounded-xl p-4 md:p-6 flex flex-col items-center ${
                             i === 0 
                             ? "bg-white shadow-[0_8px_30px_rgba(0,0,0,0.25)]" 
                              : i === 1 
                             ? "bg-[#F5FF82] shadow-[0_8px_30px_rgba(0,0,0,0.2)]" 
                             : "bg-[#2C2B2B] text-white shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                             }`}

                        >
                            <div className="mb-3 md:mb-4">
                                <img 
                                    src={getImage(i, active)} 
                                    alt={active} 
                                    className="w-10 h-10 md:w-16 md:h-16"
                                />
                            </div>
                            <div className="text-center mb-3 md:mb-4">
                                <p className="text-xs md:text-sm uppercase tracking-wider">
                                    {active === "TopSkills" ? "MY TOP SKILLS" : active.toUpperCase()}
                                </p>
                                <h3 className={`text-lg md:text-xl font-bold mt-1 ${i === 2 ? "text-white" : ""}`}>
                                    {el.skill}
                                </h3>
                            </div>
                            <div className="w-full">
                                {active === "TopSkills" ? (
                                    <p className={`text-sm md:text-base text-center ${i === 2 ? "text-white" : ""}`}>
                                        {el.description}
                                    </p>
                                ) : (
                                    <TopSkillsText texts={el.details} index={i} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TopSoftSkills;