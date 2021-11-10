import { Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

function Header(props) {
  const classes = useStyles();
  return (
    <Typography variant="h4" align="center" className={classes.container}>
      MÂY GALERY
    </Typography>
  );
}

export default Header;
