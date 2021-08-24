import React, { useState, useEffect } from "react";
import "./Albums.css";
import axios from "axios";
import Album from "../Album/Album";
import albums from "../albumsObject/albumsObject";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/actions";
const Albums = (props) => {
  let albumsReady = null;
  if (albums) {
    albumsReady = albums.map((album) => {
      return (
        <Album
          source={album.url}
          key={album.id}
          open={() => props.openAlbum(album.id)}
        />
      );
    });
  }
  return (
    <>
      <div className="Movies">{albumsReady}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentAlbumOpened: state.currentlyOpenedAlbum,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    openAlbum: (id) => dispatch(actions.openAlbum(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Albums);
