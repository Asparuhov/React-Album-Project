const initialState = {
  currentlyOpenedAlbum: null,

  currentFavourite: {},
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CURRENTOPENEDALBUM":
      return {
        ...state,
        currentlyOpenedAlbum: action.payload,
      };

    case "CURRENTFAVOURITE":
      return {
        ...state,
        currentFavourite: action.payload,
      };

    default:
      return state;
  }
};
export default albumReducer;
