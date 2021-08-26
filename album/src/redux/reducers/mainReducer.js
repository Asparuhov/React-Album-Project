const initialState = {
  currentlyOpenedAlbum: null,
  favourites: [],
  currentFavourite: {}
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CURRENTOPENEDALBUM":
      return {
        ...state,
        currentlyOpenedAlbum: action.payload,
      };
    case "ADDTOFAVOURITES":
        const favs = action.payload;
        favs.albumId = 11;
      return {
        ...state,
        favourites: state.favourites.concat(favs),
      };
      case "CURRENTFAVOURITE":
          return{
              ...state,
              currentFavourite: action.payload
          }
    default:
      return state;
  }
};
export default mainReducer;
