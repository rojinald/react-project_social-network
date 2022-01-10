import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW-POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
   posts: [
      { id: 1, message: 'Давай дружить!', likesCount: 50 },
      { id: 2, message: 'Это мой первый пост :)', likesCount: 10 },
   ],
   newPostText: 'test',
   profile: null
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = state.newPostText;
         return {
            ...state,
            newPostText: '',
            posts: [...state.posts, { id: 3, message: newPost }]
         };
      case UPDATE_NEW_POST_TEXT:
         return {
            ...state,
            newPostText: action.newText,
         };
      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile,
         }


      default:
         return state;
   }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getProfile = (userId) => {
   return (dispatch) => {
      profileAPI.getUserProfile(userId).then(data => {
         dispatch(setUserProfile(data));
      });
   }
}


export default profileReducer;