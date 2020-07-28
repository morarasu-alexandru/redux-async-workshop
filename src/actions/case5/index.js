import { raceActions } from "../../actionTypes";

export const rabbitStart = () => ({
  type: raceActions.rabbitStart,
});

export const rabbitSleep = () => ({
  type: raceActions.rabbitSleep,
});

export const rabbitRun = () => ({
  type: raceActions.rabbitRun,
});

export const turtleStart = () => ({
  type: raceActions.turtleStart,
});

export const reset = () => ({
  type: raceActions.reset,
});

export const rabbitWin = () => ({
  type: raceActions.rabbitWin,
});

export const turtleWin = () => ({
  type: raceActions.turtleWin,
});

export const startRace = (rabbitSleepTime) => ({
  type: raceActions.startRace,
  payload: { rabbitSleepTime },
});
