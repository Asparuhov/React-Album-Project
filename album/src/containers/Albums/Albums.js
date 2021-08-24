import React, { useState, useEffect } from "react";
import "./Albums.css";
import axios from "axios";
import Album from "../../components/Album/Album";
import albums from "../../components/albumsObject/albumsObject";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/actions";
const Albums = (props) => {
  const [albumContent, setAlbumContent] = useState([]);
  const [rendered, setRendered] = useState(false);
  const [showAlbum, setShowAlbum] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        setAlbumContent(res.data.splice(0, 25));
        setRendered(true);
      })
      .catch((err) => console.log(err));
  }, []);
  let albumsReady = null;
  if (rendered && albums) {
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
