import { getAuth } from "./auth-reducer";

const ININTIALIZED_SUCCESS = 'ININTIALIZED_SUCCESS'

export type InitialStateType = {
   initialized: boolean
}

let initialState: InitialStateType = {
   initialized: false
}

const appReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case ININTIALIZED_SUCCESS:
         return {
            ...state,
            initialized: true,
         };
      default:
         return state;
   }

}
type InitializedSuccessActionType = {
   type: typeof ININTIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessActionType => ({ type: ININTIALIZED_SUCCESS });

export const initializeApp = () => (dispatch: any) => {

   let promise = dispatch(getAuth())
   Promise.all([promise]).then(() => {
      dispatch(initializedSuccess())
   })


}



export default appReducer;