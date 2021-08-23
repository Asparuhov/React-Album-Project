import React from "react";
import Albums from "./containers/Albums/Albums";
import classes from "./App.module.css";
import './appBG.css'
function App() {
  return (
    <>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <h1 className={classes.Header}>Albums</h1>
      <div className={classes.App}>
        <Albums />
      </div>
    </>
  );
}

export default App;
