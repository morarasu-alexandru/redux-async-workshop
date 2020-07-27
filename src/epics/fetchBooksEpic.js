import { catchError, map, mergeMap, takeUntil } from "rxjs/operators";
import { ofType } from "redux-observable";
import { observableReduxActions } from "../actionTypes";
import { getBooksApi } from "../mock";
import {
  getBookListFulfilled,
  getBookListRejected,
  getBookListStart,
} from "../actions/case3";
import { from, of } from "rxjs";

export const fetchBooksEpic = (action$) => {
  return action$.pipe(
    ofType(observableReduxActions.getBookList),
    mergeMap(() => {
      return from(getBooksApi()).pipe(
        map((books) => getBookListFulfilled(books)),
        catchError((err) => of(getBookListRejected(err))),
        takeUntil(
          action$.pipe(ofType(observableReduxActions.cancelGetBookList))
        )
      );
    })
  );
};
