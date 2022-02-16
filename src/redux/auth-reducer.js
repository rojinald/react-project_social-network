import { authApi } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
   userID: null,
   email: null,
   login: null,
   isAuth: false,
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.data,
         };
      default:
         return state;
   }

}

export const setAuthUserData = (userID, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userID, email, login, isAuth } });

export const getAuth = () => {
   return (dispatch) => {
      authApi.getAuthData().then(data => {
         if (data.resultCode === 0) {
            let { id, login, email } = data.data
            dispatch(setAuthUserData(id, login, email, true));
         }
      });

   }
}

export const login = (email, password, rememberMe) => (dispatch) => {
   authApi.login(email, password, rememberMe)
      .then(data => {
         if (data.resultCode === 0) {
            dispatch(getAuth());
         }
      });

}


export const logout = () => (dispatch) => {
   authApi.logout()
      .then(data => {
         if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
         }
      });

}




export default authReducer;