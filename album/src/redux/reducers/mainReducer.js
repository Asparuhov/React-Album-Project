const initialState = {
    currentlyOpenedAlbum: null
}

const mainReducer = (state = initialState, action) =>{
    switch(action.type){
        case "CURRENTOPENEDALBUM":
            return{
                ...state,
                currentlyOpenedAlbum: action.payload
            }
        default:
            return state;
    }
}
export default mainReducer;