import React from "react";
import ExerciseTemplate from "../exerciseTemplate";
import Exercise2Finished from "../../containers/exerciseFinished/2";
import Exercise2 from "../../containers/exercise/2";
import PaperSocket from "../caseTemplate";

const Exercise2Content = () => {
  return (
    <>
      <ExerciseTemplate>
        <PaperSocket fullSize noMinHeight>
          <p>We want to add cancel functionality</p>
          <p>Solving steps:</p>
          {/* eslint-disable-next-line no-octal-escape */}
          <p>
            1.Add cancel action function to corresponding button (src\
            <span className="green">containers</span>\exercise\2\index.jsx)
          </p>
          {/* eslint-disable-next-line no-octal-escape */}
          <p>
            2. Modify the saga accordingly in order to listen to cancel actions
            (src\<span className="orange">sagas</span>\exercise\2\exercise2.js)
          </p>
        </PaperSocket>
        <Exercise2 />
        <Exercise2Finished />
      </ExerciseTemplate>
    </>
  );
};

export default Exercise2Content;
