import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialog-reducer";
import friendsSideBarReducer from "./friendsSideBar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";


let reducers = combineReducers({
   dialogsPage: dialogReducer,
   profilePage: profileReducer,
   friendsSideBar: friendsSideBarReducer,
   usersPage: usersReducer,
   auth: authReducer,
   app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;