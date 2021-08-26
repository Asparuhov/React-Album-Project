const CURRENTOPENEDALBUM = "CURRENTOPENEDALBUM";
const ADDTOFAVOURITES = "ADDTOFAVOURITES";
const CURRENTFAVOURITE = "CURRENTFAVOURITE";

export const openAlbum = (payload) => {
  return {
    type: CURRENTOPENEDALBUM,
    payload,
  };
};
export const addToFavourites = (payload) => {
  return {
    type: ADDTOFAVOURITES,
    payload,
  };
};

export const currentFavourite = (payload) => {
  return {
    type: CURRENTFAVOURITE,
    payload,
  };
};
