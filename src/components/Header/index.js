import React from "react";
import useStyles from "./styles";

function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
     <img alt='may-logo' src='./may.png' className={classes.logo} />
      <h1 style={{display:'inline'}}>MÂY GALERY</h1>
    </div>
  );
}

export default Header;
