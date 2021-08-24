import React, {useState, useEffect} from "react";
import Albums from "./components/Albums/Albums";
import "./appBG.css";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import { SliderData } from "./components/ImageSlider/SliderData";
import { connect } from "react-redux";
import * as actions from "./redux/actions/actions";
function App(props) {
  return (
    <div className="App">
      <div
        className={props.currentAlbumState !== null ? "during-popup" : ""}
        onClick={() => props.closeSlider()}
      ></div>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>

      <h1 className="Header">Albums</h1>

      <Albums />

      {props.currentAlbumState !== null ? <ImageSlider slides={SliderData} /> : null}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    currentAlbumState: state.currentlyOpenedAlbum,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    closeSlider: () => dispatch(actions.openAlbum(null)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
