import React, { useState } from "react";
import PaperSocket from "../../components/caseTemplate";
import rabbitRunImg from "../../components/img/5/rabbitRun.png";
import rabbitSleepImg from "../../components/img/5/rabbitSleep.png";
import turtleImg from "../../components/img/5/turtle.png";
import finishImg from "../../components/img/5/finish.png";
import { motion } from "framer-motion";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

import style from "./case5.module.scss";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { reset, startRace } from "../../actions/case5";
import { rabbitPhase, turtlePhase } from "../../reducers/case5";
import {
  rabbitRunTime,
  rabbitStartTime,
  turtleRunTime,
} from "../../sagas/case5";

const Case5Content = () => {
  const [sleepTimeValue, setSleepTimeValue] = useState(3000);
  const { rabbitState, turtleState, winner } = useSelector(
    (state) => state.case5
  );

  const dispatch = useDispatch();

  const startRaceAction = (sleepTimeValue) =>
    dispatch(startRace(sleepTimeValue));

  const handleChangeSleepTime = (event) => {
    setSleepTimeValue(parseInt(event.target.value));
  };

  const startRabbitTurtleRace = () => {
    startRaceAction(sleepTimeValue);
  };

  const resetAction = () => {
    dispatch(reset());
  };

  const turtleAnimation = (() => {
    switch (turtleState) {
      case turtlePhase.initialPhase:
        return "initial";
      case turtlePhase.startPhase:
        return "run";
      default:
        return "initial";
    }
  })();

  const turtleVariants = {
    initial: {
      x: 0,
    },
    run: {
      x: 500,
      transition: { ease: "easeIn", duration: turtleRunTime },
    },
  };

  const rabbitAnimation = (() => {
    switch (rabbitState) {
      case rabbitPhase.initialPhase:
        return "initial";
      case rabbitPhase.startPhase:
        return "start";
      case rabbitPhase.sleepPhase:
        return "sleep";
      case rabbitPhase.runPhase:
        return "run";
      default:
        return "initial";
    }
  })();

  const rabbitVariants = {
    initial: { x: 0 },
    start: {
      x: 250,
      transition: { ease: "easeIn", duration: rabbitStartTime },
    },
    sleep: { x: 250 },
    run: { x: 500, transition: { ease: "easeIn", duration: rabbitRunTime } },
  };

  return (
    <PaperSocket fullSize>
      <div className={style.panel}>
        <FormControl style={{ marginRight: "20px" }}>
          <InputLabel htmlFor="rabbitSleep">Rabbit sleep time</InputLabel>
          <Input
            id="rabbitSleep"
            value={sleepTimeValue}
            onChange={handleChangeSleepTime}
          />
        </FormControl>
        <Button
          onClick={startRabbitTurtleRace}
          className="GeneralButton"
          size={"small"}
          variant={"contained"}
          color={"primary"}
        >
          Start
        </Button>
        <Button
          onClick={resetAction}
          className="GeneralButton"
          size={"small"}
          variant={"contained"}
          color={"primary"}
        >
          Reset
        </Button>
        <div>
          The winner is:{" "}
          <span
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              color: winner === "Turtle" ? "green" : "red",
            }}
          >
            {winner}
          </span>
        </div>
      </div>
      <div className={style.main}>
        <div className={style.rabbitWrapper}>
          <motion.div variants={rabbitVariants} animate={rabbitAnimation}>
            {rabbitState === rabbitPhase.sleepPhase ? (
              <div className={style.rabbit}>{RabbitSleepingElement}</div>
            ) : (
              <div className={style.rabbit}>{RabbitRunElement}</div>
            )}
          </motion.div>
        </div>
        <div className={style.turtleWrapper}>
          <motion.div variants={turtleVariants} animate={turtleAnimation}>
            <div className={style.turtle}>{TurtleElement}</div>
          </motion.div>
        </div>
      </div>
      <div style={{ position: "relative" }}>{FinishElement}</div>
    </PaperSocket>
  );
};

export default Case5Content;

const FinishElement = (
  <img className={style.finishImg} src={finishImg} alt="finish" />
);

const RabbitRunElement = (
  <img className={style.rabbitImg} src={rabbitRunImg} alt={"saga info"} />
);
const RabbitSleepingElement = (
  <img className={style.turtleImg} src={rabbitSleepImg} alt={"saga info"} />
);
const TurtleElement = (
  <img className={style.turtleImg} src={turtleImg} alt={"saga info"} />
);
