import React, { useState, useEffect } from "react";
import classes from "./Albums.module.css";
import axios from "axios";
import Album from "../../components/Album/Album";
import albums from "../../components/albumsObject/albumsObject";
const Albums = (props) => {
  const [albumContent, setAlbumContent] = useState([]);
  const [rendered, setRendered] = useState(false);
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
          /*   add={() => props.addFavourite(album)} */
        />
      );
    });
  }
  return <div className={classes.Movies}>{albumsReady}</div>;
};

export default Albums;
