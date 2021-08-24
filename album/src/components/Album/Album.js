import React from "react";
import classes from "./Album.module.css";
const Album = (props) => {
  return (
    <div className={classes.Item}>
      <img src={props.source} alt="Error loading" onClick={props.open} />
    </div>
  );
};

export default Album;
