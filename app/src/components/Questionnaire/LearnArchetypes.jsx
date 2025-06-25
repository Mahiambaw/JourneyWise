import React, { useState, useEffect } from "react";
import UseCard from "../UserCard/UserCard";
import Dots from "../Dots/Dots";
import ImageTextCard from "../ImageTextCard/ImageTextCard";
import archData from "../../Data/archetypesData.json";
import Img from "../../assets/archetypes/arcetypebg.png";

const LearnArcheTypes = ({ archtype }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  // Auto-slide every 5 seconds if user hasn't selected
  useEffect(() => {
    if (archtype.archeType || !autoSlide) return;
    
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % archData.archetype.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoSlide, archtype]);

  const handleClick = (nextIndex) => {
    setAutoSlide(false);
    setActiveIndex(nextIndex);
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <UseCard Img={Img}>
        {archData.archetype.map((arch, i) => (
          <ImageTextCard 
            key={arch.id} 
            img={arch.image} 
            title={arch.title} 
            text={arch.text} 
            alt={arch.alt} 
            isActive={activeIndex === i} 
            archtype={archtype} 
          />
        ))}
        
        <Dots 
          arch={archData.archetype}  
          selectedArchetype={archtype.archeType} 
          handleClick={handleClick} 
          activeIndex={activeIndex} 
        />
      </UseCard>
    </div>
  );
}

export default LearnArcheTypes;