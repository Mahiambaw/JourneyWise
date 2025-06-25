import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Buttons from '../Buttons/Buttons';
import Options from './Options';
import ProgressBar from './ProgressBar';
import { questionData } from '../../Data/questionData';

const archeTypeData = {
  "Attention To Detail": 3,
  "Strong Work Ethic": 3,
  "Organized": 2,
  "Reliable": 6,
  "Self-Motivated": 2,
  "Analytical Thinking": 2,
  "Problem-Solving Ability": 2,
  "Autonomy": 4,
  "Time Management": 4,
  "Initiative": 3
};

const softSkillsData = {
  "Adaptability": 3,
  "Passionate": 3,
  "Empathy": 6,
  "Emotional Intelligence": 4,
  "Goal Setting": 5,
  "Patience": 3,
  "Flexibility": 2,
  "Communication": 6,
  "Collaboration": 6,
  "Resilience": 2,
  "Independence": 5,
  "Integrity": 2,
  "Self-Reflection": 3,
  "Critical Thinking": 4,
  "Decision-Making": 1,
  "Delegation": 1,
  "Creativity": 3
};

const Questionnaire = ({ index, setIndex, arch, setArch }) => {
  const [questions] = useState(questionData);
  const [selected, setSelected] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [count, setCount] = useState({});
  const [arcTypeCount, setArcTypeCount] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (selected !== null) {
      const selectedOption = questions.questions[index].options[selected];
      const newSoftSkillCount = {};
      const newArchTypeCount = { skills: {} };
      
      selectedOption.softSkills.forEach((skill) => {
        if (index === 0) {
          newArchTypeCount.skills[skill] = archeTypeData[skill];
          newArchTypeCount["archeType"] = questions.questions[index].options[selected].answer;
          newArchTypeCount["id"] = questions.questions[index].options[selected].id;
        } else {
          newSoftSkillCount[skill] = (softSkillsData[skill] || 0) + 1;
        }
      });
      
      if (index === 0) {
        setArcTypeCount(newArchTypeCount);
        setArch(newArchTypeCount);
      }
      
      setCount(prevCount => ({
        ...prevCount,
        ...newSoftSkillCount,
      }));
    }
  }, [selected, index, questions, setArch]);

  const numberQuestion = index + 1;

  const handleNext = () => {
    if (index < questions.questions.length - 1) {
      setIndex(index + 1);
      setSelected(null);
      setSelectedId(null);
    } else {
      navigate("/result", { state: { count, arcTypeCount } });
    }
  };

  const handleSelected = (i, id) => {
    setSelected(i);
    setSelectedId(id);
  };

    return (
  <div className="flex flex-col w-full h-full">
    <ProgressBar index={index} total={questions.questions.length} />
    
    <div className="flex-grow overflow-y-auto mb-4">
      <div className="my-6">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
          QUESTION {numberQuestion}/{questions.questions.length}
        </p>
        <h3 className="mt-2 text-xl font-bold text-gray-800 md:text-2xl">
          {questions.questions[index].question}
        </h3>
      </div>
      
      <Options 
        answerChoices={questions.questions[index].options} 
        handleSelected={handleSelected} 
        selectedId={selectedId} 
      />
      </div>
      
      <div className="mt-auto pt-4">
        <Buttons 
          onClick={handleNext} 
          alternate={selectedId === null} 
          primary={selectedId !== null} 
          rounded 
          disabled={selectedId === null}
          className={`w-full py-3 ${selectedId !== null ? 'bg-primary' : 'bg-gray-300'}`}
        >
          {index < questions.questions.length - 1 ? 'NEXT' : 'SEE RESULTS'}
        </Buttons>
      </div>
    </div>
  );
};

export default Questionnaire