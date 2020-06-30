import React from "react";
import AppBar from "@material-ui/core/AppBar";

import style from "./header.module.scss";

const Header = (props) => {
  const { title } = props;

  return (
    <AppBar className="Header" position={"static"}>
      <h1 className={`${style.title} TextCenter`}>{title}</h1>
    </AppBar>
  );
};

export default Header;
