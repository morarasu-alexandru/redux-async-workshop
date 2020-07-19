import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/home";
import { Provider } from "react-redux";
import store from "./store";
import Case1Page from "./pages/case1";
import Case2Page from "./pages/case2";
import Case3Page from "./pages/case3";

import "./App.css";
import pageRoute from "./pages/pageRoute";
import Exercise1Page from "./pages/exercise1";
import Exercise2Page from "./pages/exercise2";
import Exercise3Page from "./pages/exercise3";
import Case4Page from "./pages/case4";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path={pageRoute.home} component={HomePage} />
            <Route exact path={pageRoute.case1} component={Case1Page} />
            <Route exact path={pageRoute.case2} component={Case2Page} />
            <Route exact path={pageRoute.case3} component={Case3Page} />
            <Route exact path={pageRoute.exercise1} component={Exercise1Page} />
            <Route exact path={pageRoute.exercise2} component={Exercise2Page} />
            <Route exact path={pageRoute.exercise3} component={Exercise3Page} />
            <Route exact path={pageRoute.case4} component={Case4Page} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
