import { authApi, securityAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

let initialState = {
   id: null as number | null,
   email: null as string | null,
   login: null as string | null,
   isAuth: false,
   captchaUrl: null as string | null,
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
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
type SetAuthUserDataActionPayloadType = {
   id: number | null
   email: string | null
   login: string | null
   isAuth: boolean
}

type SetAuthUserDataType = {
   type: typeof SET_USER_DATA
   payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataType => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } });

type GetCaptchaUrlSuccessActionPayloadType = {
   captchaUrl: string
}

type GetCaptchaUrlSuccess = {
   type: typeof GET_CAPTCHA_URL_SUCCESS
   payload: GetCaptchaUrlSuccessActionPayloadType
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccess => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } });

export const getAuth = () => async (dispatch: any) => {
   let data = await authApi.getAuthData();
   if (data.resultCode === 0) {
      let { id, login, email } = data.data
      dispatch(setAuthUserData(id, login, email, true));
   }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string, setStatus: any) => async (dispatch: any) => {
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


export const logout = () => async (dispatch: any) => {
   let data = await authApi.logout()
   if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
   }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
   const response = await securityAPI.getCaptchaUrl()
   const captchaUrl = response.data.url
   dispatch(getCaptchaUrlSuccess(captchaUrl));
}




export default authReducer;