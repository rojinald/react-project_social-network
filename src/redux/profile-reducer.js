import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
   posts: [
      { id: 1, message: 'Давай дружить!', likesCount: 50 },
      { id: 2, message: 'Это мой первый пост :)', likesCount: 10 },
   ],
   profile: null,
   status: ""
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            posts: [...state.posts, { id: 3, message: action.text, likesCount: 0 }]
         };
      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile,
         };
      case SET_USER_STATUS: {
         return {
            ...state,
            status: action.status
         }
      };
      case UPDATE_USER_STATUS: {
         return {
            ...state,
            status: action.status
         }
      };
      case DELETE_POST: {
         return {
            ...state,
            posts: state.posts.filter(p => p.id != action.postId)
         }
      };
      case SAVE_PHOTO_SUCCESS:
         return {
            ...state,
            profile: { ...state.profile, photos: action.photos }
         };


      default:
         return state;
   }
}

export const addPostActionCreator = (text) => ({ type: ADD_POST, text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });
export const updateUserStatus = (status) => ({ type: UPDATE_USER_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getProfile = (userId) => async (dispatch) => {
   let data = await profileAPI.getUserProfile(userId);
   dispatch(setUserProfile(data));
}

export const getStatus = (userId) => async (dispatch) => {
   let data = await profileAPI.getUserStatus(userId);
   dispatch(setUserStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
   let data = await profileAPI.updateUserStatus(status)
   if (data.resultCode === 0)
      dispatch(updateUserStatus(status));
}

export const savePhoto = (file) => async (dispatch) => {
   let data = await profileAPI.savePhoto(file)
   if (data.resultCode === 0)
      dispatch(savePhotoSuccess(data.data.photos));
}
export const saveProfile = (profile, { setStatus }) => async (dispatch, getState) => {
   const userId = getState().auth.id
   let data = await profileAPI.saveProfile(profile)
   if (data.resultCode === 0)
      dispatch(getProfile(userId));
   else {
      setStatus((data.messages))
   }
}

export default profileReducer;