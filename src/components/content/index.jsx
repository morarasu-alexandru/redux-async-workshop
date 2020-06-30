import React from "react";

import style from "./content.module.scss";

const Content = (props) => {
  const { className } = props;
  return (
    <div className={`${style.Content} ${className}`}>{props.children}</div>
  );
};

export default Content;
