// src/components/ArcheTypes/StartQuestionnaire.jsx
import React, { useState } from "react";
import Questionnaire from "../Questionnaire/Questionnaire";
import LearnArchetypes from "../Questionnaire/LearnArchetypes";
import QuestionnairePhotos from "../Questionnaire/QuestionnairePhotos";
import Footer from '../Footer/Footer';
import { questionData } from "../../Data/questionData";
import CloseQuestionnaire from "../Questionnaire/CloseQuestionnaire";

const StartQuestionnaire = () => {
    const [index, setIndex] = useState(0);
    const [arch, setArch] = useState({});
   
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <div className="relative flex-grow flex flex-col">
                <CloseQuestionnaire /> 
                <div className="flex flex-col md:flex-row gap-6 p-4 max-w-7xl mx-auto flex-grow pb-16"> {/* Added padding-bottom */}
                    <div className="w-full md:w-1/2 flex flex-col">
                        {index === 0 ? 
                            <LearnArchetypes archtype={arch} /> : 
                            <QuestionnairePhotos index={index} questionData={questionData} />
                        }
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col">
                        <Questionnaire 
                            index={index} 
                            setIndex={setIndex} 
                            arch={arch} 
                            setArch={setArch} 
                        />
                    </div>
                </div>
                
                {/* Spacer to prevent footer overlap */}
                <div className="h-16 md:h-24 flex-shrink-0"></div>
            </div>
            <Footer /> 
        </div>
    );
};

export default StartQuestionnaire;