import favReducer from "./favourites-reducer";
import albumReducer from "./album-reducer";
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favourites', 'albums']
}
const rootReducer = combineReducers({
    favourites: favReducer,
    albums: albumReducer
})
export default persistReducer(persistConfig, rootReducer)