import React from "react";

const QuestionnairePhotos = ({ index, questionData }) => {
  const currentQuestion = questionData.questions[index];
  const imageSrc = currentQuestion.image;

  return (
    <div className="flex items-center justify-center h-full w-full p-4">
      <img 
        src={imageSrc} 
        alt={`Question ${index + 1}`} 
        className="object-contain w-full h-full max-h-[60vh]"
      /> 
    </div>
  );
};

export default QuestionnairePhotos;