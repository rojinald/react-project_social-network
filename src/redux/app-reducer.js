import { authApi } from "../api/api";
import { getAuth } from "./auth-reducer";

const ININTIALIZED_SUCCESS = 'ININTIALIZED_SUCCESS'


let initialState = {
   initialized: false
}

const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case ININTIALIZED_SUCCESS:
         return {
            ...state,
            initialized: true
         };
      default:
         return state;
   }

}

export const initializedSuccess = () => ({ type: ININTIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {

   let promise = dispatch(getAuth())
   Promise.all([promise]).then(() => {
      dispatch(initializedSuccess())
   })


}



export default appReducer;