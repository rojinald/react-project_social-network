import { authApi, securityAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
   captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
      case GET_CAPTCHA_URL_SUCCESS:
         return {
            ...state,
            ...action.payload,
         };
      default:
         return state;
   }

}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } });
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } });

export const getAuth = () => async (dispatch) => {
   let data = await authApi.getAuthData();
   if (data.resultCode === 0) {
      let { id, login, email } = data.data
      dispatch(setAuthUserData(id, login, email, true));
   }
}

export const login = (email, password, rememberMe, captcha, setStatus) => async (dispatch) => {
   let data = await authApi.login(email, password, rememberMe, captcha)
   if (data.resultCode === 0) {
      dispatch(getAuth());
   }
   else {
      if (data.resultCode === 10) {
         dispatch(getCaptchaUrl())
      }
      setStatus((data.messages))
   }
}


export const logout = () => async (dispatch) => {
   let data = await authApi.logout()
   if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
   }
}

export const getCaptchaUrl = () => async (dispatch) => {
   const response = await securityAPI.getCaptchaUrl()
   const captchaUrl = response.data.url
   dispatch(getCaptchaUrlSuccess(captchaUrl));
}




export default authReducer;