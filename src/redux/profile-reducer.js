import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';
const DELETE_POST = 'DELETE_POST';


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
      }


      default:
         return state;
   }
}

export const addPostActionCreator = (text) => ({ type: ADD_POST, text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });
export const updateUserStatus = (status) => ({ type: UPDATE_USER_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const getProfile = (userId) => {
   return (dispatch) => {
      profileAPI.getUserProfile(userId).then(data => {
         dispatch(setUserProfile(data));
      });
   }
}

export const getStatus = (userId) => {
   return (dispatch) => {
      profileAPI.getUserStatus(userId)
         .then(data => {
            dispatch(setUserStatus(data));
         });
   }
}

export const updateStatus = (status) => {
   return (dispatch) => {
      profileAPI.updateUserStatus(status)
         .then(data => {
            if (data.resultCode === 0)
               dispatch(updateUserStatus(status));
         });
   }
}

export default profileReducer;