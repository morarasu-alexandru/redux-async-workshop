import { raceActions } from "../../actionTypes";

export const rabbitPhase = {
  initialPhase: "initialPhase",
  startPhase: "startPhase",
  sleepPhase: "sleepPhase",
  runPhase: "runPhase",
};

export const turtlePhase = {
  initialPhase: "initialPhase",
  startPhase: "startPhase",
};

const initialState = {
  rabbitState: rabbitPhase.initialPhase,
  turtleState: turtlePhase.initialPhase,
  winner: null,
};

const case5Reducer = (state = initialState, action) => {
  switch (action.type) {
    case raceActions.turtleStart:
      return {
        ...state,
        turtleState: turtlePhase.startPhase,
      };

    case raceActions.rabbitStart:
      return {
        ...state,
        rabbitState: rabbitPhase.startPhase,
      };

    case raceActions.rabbitSleep:
      return {
        ...state,
        rabbitState: rabbitPhase.sleepPhase,
      };

    case raceActions.rabbitRun:
      return {
        ...state,
        rabbitState: rabbitPhase.runPhase,
      };

    case raceActions.turtleWin:
      return {
        ...state,
        winner: "Turtle",
      };

    case raceActions.rabbitWin:
      return {
        ...state,
        winner: "Rabbit",
      };

    case raceActions.reset:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default case5Reducer;
