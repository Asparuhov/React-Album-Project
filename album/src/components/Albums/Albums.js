import React from "react";
import "./Albums.css";
import Album from "../Album/Album";
import albums from "../albumsObject/albumsObject";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/actions";
const Albums = (props) => {
  let albumsReady = null;
  if (albums && props.favourites.length > 0) {
    albumsReady = albums
      .map((album) => {
        return (
          <Album
            source={album.url}
            key={album.id}
            open={() => props.openAlbum(album.id)}
          />
        );
      })
      .reverse();
  } else if(albums) {
    albumsReady = albums
      .map((album) => {
        if (album.id !== 11) {
          return (
            <Album
              source={album.url}
              key={album.id}
              open={() => props.openAlbum(album.id)}
            />
          );
        }
      })
      .reverse();
  }
  return (
    <>
      <div className="Albums">{albumsReady}</div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentAlbumOpened: state.currentlyOpenedAlbum,
    favourites: state.favourites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    openAlbum: (id) => dispatch(actions.openAlbum(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Albums);
