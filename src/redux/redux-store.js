import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialog-reducer";
import friendsSideBarReducer from "./friendsSideBar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form"

let reducers = combineReducers({
   dialogsPage: dialogReducer,
   profilePage: profileReducer,
   friendsSideBar: friendsSideBarReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;