import { combineReducers, createStore } from "redux";
import dialogReducer from "./dialog-reducer";
import friendsSideBarReducer from "./friendsSideBar-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
   dialogsPage: dialogReducer,
   profilePage: profileReducer,
   friendsSideBar: friendsSideBarReducer
});

let store = createStore(reducers);

window.store = store;

export default store;