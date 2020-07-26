import { combineEpics } from "redux-observable";
import { fetchBooksEpic } from "./fetchBooksEpic";

export const rootEpic = combineEpics(fetchBooksEpic);

export default rootEpic;
