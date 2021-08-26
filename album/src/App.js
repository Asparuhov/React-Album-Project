import React, { useState, useEffect } from "react";
import Albums from "./components/Albums/Albums";
import "./appBG.css";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import { connect } from "react-redux";
import * as actions from "./redux/actions/actions";
import axios from "axios";
function App(props) {
  const [albumContent, setAlbumContent] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setAlbumContent(res.data.slice(0, 500));
        setLoaded(true);
        console.log(res.data.slice(0, 500));
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    setAlbumContent((prev) => prev.concat(props.currentFav));
    console.log(albumContent);
  }, [props.currentFav]);


  return (
    <div className="App">
      <div
        className={props.currentAlbumState !== null ? "during-popup" : ""}
        onClick={() => props.closeSlider()}
      ></div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      <h1 className="Header">Albums</h1>

      <Albums />

      {props.currentAlbumState !== null ? (
        <ImageSlider
          slides={
            albumContent
              ? albumContent.filter(
                  (photo) => photo.albumId === props.currentAlbumState
                )
              : null
          }
        />
      ) : null}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    currentAlbumState: state.currentlyOpenedAlbum,
    favourites: state.favourites,
    currentFav: state.currentFavourite,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    closeSlider: () => dispatch(actions.openAlbum(null)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
