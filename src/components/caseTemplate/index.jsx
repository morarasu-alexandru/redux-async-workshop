import React from "react";
import Paper from "@material-ui/core/Paper";
import classNames from "classnames";

import style from "./CaseTemplate.module.scss";

const PaperSocket = ({ children, fullSize, noMinHeight }) => {
  return (
    <Paper
      classes={{
        root: classNames(`${style.Main}`, {
          [style.FullSize]: fullSize,
          [style.NoMinHeight]: noMinHeight,
        }),
      }}
      elevation={6}
    >
      {children}
    </Paper>
  );
};

export default PaperSocket;
