import { Link } from "react-router-dom";
import pageRoute from "../../pages/pageRoute";
import Button from "@material-ui/core/Button";
import style from "../content/content.module.scss";
import React from "react";

const HomeContent = () => {
  return (
    <>
      <h2>Asynchronous Redux</h2>
      <p> - Pure Redux</p>
      <p> - Redux Thunk</p>
      <p>
        <b> - Redux Saga </b>
      </p>
      <p> - Redux Observable</p>
      <Link to={pageRoute.case1}>
        <Button
          classes={{ root: style.Button }}
          variant="contained"
          size="large"
          color="primary"
        >
          Start
        </Button>
      </Link>
    </>
  );
};

export default HomeContent;
