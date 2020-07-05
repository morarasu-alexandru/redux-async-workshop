import React from "react";
import ExerciseTemplate from "../exerciseTemplate";
import Exercise1Finished from "../../containers/exerciseFinished/1";

const Exercise1Content = () => {
  return (
    <>
      <ExerciseTemplate>
        <>
          <p>We want to add cancel functionality</p>
        </>
        <span>test1</span>
        <Exercise1Finished />
      </ExerciseTemplate>
    </>
  );
};

export default Exercise1Content;
