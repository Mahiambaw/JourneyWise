// Content.jsx
import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import pioneer from "/pioneer.svg";
import perfectionist from "/perfectionist.svg";
import recluse from "/recluse.svg";
import soloist from "/soloist.svg";
import trailblazer from "/Trailblazer-Archetype-Illustration.svg";
import seer from "/Seer-Archetype-Illustration.svg";

const Content = () => {
  const [active, setActive] = useState("Iam");
  const location = useLocation();
  const {arcTypeCount: {archeType}} = location.state;
  const archsplit = archeType.split(" ");
  const archToLowerCase = archsplit[1].toLowerCase();
  
  let archetypeImage, oldArchtype, textIam, textIwas, image;

  switch (archToLowerCase) {
    case "soloist":
      archetypeImage = soloist;
      oldArchtype = "The TrailBlazer";
      textIwas = "As the Soloist, you may feel a strong compulsion to handle tasks independently...";
      textIam = "As a Trailblazer, you harness your independence and initiative to forge new paths...";
      image = trailblazer;
      break;
    case "perfectionist":
      archetypeImage = perfectionist;
      oldArchtype = "The Pioneer";
      textIwas = "As a Perfectionist, you constantly strive for flawlessness...";
      textIam = "As a Pioneer, you channel your drive for excellence into innovative pursuits...";
      image = pioneer;
      break;
    case "recluse":
      archetypeImage = recluse;
      oldArchtype = "The Seer";
      textIwas = "As the Recluse, you experience constant pressure to appear effortlessly competent...";
      textIam = "As a Seer, you transcend the confines of self-imposed isolation...";
      image = seer;
      break;
    default:
      archetypeImage = null;
      break;
  }

  const handleClick = (buttonType) => {
    setActive(buttonType);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-4xl font-serifTex font-normal">
            Toggle Through To See Your Evolution
          </h3>
        </div>
        
        <figure className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="flex justify-center items-center p-6 md:p-8 md:w-2/5">
              <img 
                className="w-full max-w-[280px] md:max-w-none"
                src={active === "Iam" ? image : archetypeImage}
                alt={active === "Iam" ? "Current archetype" : "Previous archetype"} 
              />
            </div>
            
            <div className="bg-[#E5F0F7] p-6 md:p-8 md:w-3/5">
              <h3 className="text-2xl md:text-4xl font-serifTex font-normal mb-4">
                {active === "Iam" ? oldArchtype : archeType}
              </h3>
              <p className="text-base md:text-lg">
                {active === "Iam" ? textIam : textIwas}
              </p>
            </div>
          </div>
        </figure>
        
        <div className="flex justify-center mt-8">
          <div className="flex rounded-full border border-black overflow-hidden">
            <button 
              className={`px-6 py-2 text-sm md:text-base ${active === "Iam" ? "bg-black text-white" : ""}`}
              onClick={() => handleClick("Iam")}
            >
              I AM
            </button>
            <button 
              className={`px-6 py-2 text-sm md:text-base ${active === "Iwas" ? "bg-black text-white" : ""}`}
              onClick={() => handleClick("Iwas")}
            >
              I WAS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;