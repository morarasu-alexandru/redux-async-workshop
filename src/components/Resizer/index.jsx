import React from "react";

import "./resizer.scss";

const Resizer = (props) => {
  const { children } = props;
  return <div className={"Resizer"}>{children}</div>;
};

export default Resizer;
