import { Link } from "react-router-dom";
import pageRoute from "../../pages/pageRoute";
import Button from "@material-ui/core/Button";
import React from "react";

import style from "../content/content.module.scss";
import style2 from "./homeContent.module.scss";

const HomeContent = () => {
  return (
    <>
      <div className={style2.Container}>
        <h2>Asynchronous Redux</h2>
        <div className={style2.ContainerText}>
          <p className={style2.Text}>&#8226; Pure Redux</p>
          <p className={style2.Text}>&#8226; Redux Thunk</p>
          <p className={style2.Text}>
            <b>&#8226; Redux Saga </b>
          </p>
          <p className={style2.Text}>&#8226; Redux Observable</p>
        </div>
        <Link className={"ResetButton"} to={pageRoute.case1}>
          <Button
            classes={{ root: style.Button }}
            variant="contained"
            size="large"
            color="primary"
          >
            Start
          </Button>
        </Link>
      </div>
    </>
  );
};

export default HomeContent;
