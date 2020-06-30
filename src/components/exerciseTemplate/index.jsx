import React from "react";

const ExerciseTemplate = ({ children }) => {
  return (
    <div className="wrapperExercise">
      <div className="exerciseDescription">{children[0]}</div>
      <div className="exercise exerciseLeft">{children[1]}</div>
      <div className="exercise exerciseRight">{children[2]}</div>
    </div>
  );
};

export default ExerciseTemplate;
