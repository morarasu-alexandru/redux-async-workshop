import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";

import style from "./footer.module.scss";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const { previousLink, nextLink } = props;
  return (
    <AppBar
      classes={{
        root: style.ContainerWrapper,
      }}
      position={"static"}
    >
      <div className={style.Container}>
        {previousLink ? (
          <Link className={"ResetButton"} to={previousLink}>
            <Button
              className={"GeneralButton Button--NoMargin"}
              variant="contained"
              color="secondary"
            >
              Previous
            </Button>
          </Link>
        ) : (
          <Button
            className={"GeneralButton Button--NoMargin"}
            disabled
            variant="contained"
            color="secondary"
          >
            Previous
          </Button>
        )}

        <Link className={"ResetButton"} to={nextLink}>
          <Button
            className={"GeneralButton Button--NoMargin"}
            disabled={!nextLink}
            variant="contained"
            color="secondary"
          >
            Next
          </Button>
        </Link>
      </div>
    </AppBar>
  );
};

export default Footer;
