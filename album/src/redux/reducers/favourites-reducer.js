const initialState = {
  favourites: [],
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTOFAVOURITES":
      const favs = action.payload;
      favs.albumId = 11;
      return {
        ...state,
        favourites: state.favourites.concat(favs),
      };

    case "REMOVEFAV":
      console.log(action.payload);
      const indx = state.favourites.findIndex((x) => x.id === action.payload);
      console.log(state.favourites);
      return {
        ...state,
        favourites: state.favourites.filter((_, index) => index !== indx),
        currentFavourite: {},
      };
    default:
      return state;
  }
};
export default favReducer;
