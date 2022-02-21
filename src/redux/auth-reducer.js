import { authApi } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
   id: null,
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

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } });

export const getAuth = () => async (dispatch) => {
   let data = await authApi.getAuthData();
   if (data.resultCode === 0) {
      let { id, login, email } = data.data
      dispatch(setAuthUserData(id, login, email, true));
   }
}

export const login = (email, password, rememberMe, setStatus) => async (dispatch) => {
   let data = await authApi.login(email, password, rememberMe)
   if (data.resultCode === 0) {
      dispatch(getAuth());
   }
   else {
      setStatus((data.messages))
   }
}


export const logout = () => async (dispatch) => {
   let data = await authApi.logout()
   if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
   }
}




export default authReducer;