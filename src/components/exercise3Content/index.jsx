import React from "react";
import ExerciseTemplate from "../exerciseTemplate";
import PaperSocket from "../caseTemplate";
import Exercise3Finished from "../../containers/exerciseFinished/3";
import Exercise3 from "../../containers/exercise/3";
import { debounceActions } from "../../actionTypes";

const Exercise3Content = () => {
  return (
    <>
      <ExerciseTemplate>
        <PaperSocket fullSize noMinHeight>
          <p>We want to save the pane size once every half a second</p>
          <p>Solving steps:</p>
          {/* eslint-disable-next-line no-octal-escape */}
          <p>
            1.Observe <b>changePaneSize</b>, it's called every time the pane
            it's changed. Also we get as function input the size of the pane. We
            can see the changing size on console. (src\
            <span className="green">containers</span>\exercise\3\index.jsx)
          </p>
          {/* eslint-disable-next-line no-octal-escape */}
          <p>
            2. Call function <b>changeSizeAction</b> on <b>changePaneSize</b>{" "}
            (line 23) (src\
            <span className="green">containers</span>\exercise\3\index.jsx)
          </p>
          {/* eslint-disable-next-line no-octal-escape */}
          <p>
            3. Notice we are calling <b>paneResizeSaga</b> every time we
            received a new size and we would like this to happen once every 500
            ms. You can check in console and then move to next step.(src\
            <span className="orange">sagas</span>\exercise\3\exercise3.js)
          </p>
          {/* eslint-disable-next-line no-octal-escape */}
          <p>
            4. In <b>watchPaneResize</b> function, for{" "}
            <i>debounceActions.changeSize</i> action type, change the watcher
            from 'takeLatest' to a suitable one in order to invoke
            'paneResizeSaga' once every 500 ms (src\
            <span className="orange">sagas</span>\exercise\3\exercise3.js)
          </p>
          {/* eslint-disable-next-line no-octal-escape */}
          <p>
            5. In <b>paneResizeSaga</b>, first we have to dispatch savePaneSize
            action (src\<span className="orange">sagas</span>
            \exercise\3\exercise3.js)
          </p>
          {/* eslint-disable-next-line no-octal-escape */}
          <p>
            6. In <b>paneResizeSaga</b>, second we have to call 'postSizeSaga'
            'savePaneSize' action (src\<span className="orange">sagas</span>
            \exercise\3\exercise3.js)
          </p>
        </PaperSocket>
        <Exercise3 />
        <Exercise3Finished />
      </ExerciseTemplate>
    </>
  );
};

export default Exercise3Content;
