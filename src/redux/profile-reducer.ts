import { profileAPI } from "../api/api";
import { PhotosType, PostType, ProfileType } from "../types/types";

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
   ] as Array<PostType>,
   profile: null as ProfileType | null,
   status: ""
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
            profile: { ...state.profile, photos: action.photos } as ProfileType
         };


      default:
         return state;
   }
}
type AddPostActionCreatorType = {
   type: typeof ADD_POST
   text: string
}
export const addPostActionCreator = (text: string): AddPostActionCreatorType => ({ type: ADD_POST, text });
type SetUserProfiletype = {
   type: typeof SET_USER_PROFILE
   profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfiletype => ({ type: SET_USER_PROFILE, profile });
type SetUserStatusType = {
   type: typeof SET_USER_STATUS
   status: string
}
export const setUserStatus = (status: string): SetUserStatusType => ({ type: SET_USER_STATUS, status });
type UpdateUserStatusType = {
   type: typeof UPDATE_USER_STATUS
   status: string
}
export const updateUserStatus = (status: string): UpdateUserStatusType => ({ type: UPDATE_USER_STATUS, status });
type DeletePostType = {
   type: typeof DELETE_POST
   postId: number
}
export const deletePost = (postId: number): DeletePostType => ({ type: DELETE_POST, postId });
type SavePhotoSuccessType = {
   type: typeof SAVE_PHOTO_SUCCESS
   photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getProfile = (userId: string) => async (dispatch: any) => {
   let data = await profileAPI.getUserProfile(userId);
   dispatch(setUserProfile(data));
}

export const getStatus = (userId: number) => async (dispatch: any) => {
   let data = await profileAPI.getUserStatus(userId);
   dispatch(setUserStatus(data));
}

export const updateStatus = (status: string) => async (dispatch: any) => {
   let data = await profileAPI.updateUserStatus(status)
   if (data.resultCode === 0)
      dispatch(updateUserStatus(status));
}

export const savePhoto = (file: any) => async (dispatch: any) => {
   let data = await profileAPI.savePhoto(file)
   if (data.resultCode === 0)
      dispatch(savePhotoSuccess(data.data.photos));
}
export const saveProfile = (profile: ProfileType, { setStatus }: any) => async (dispatch: any, getState: any) => {
   const userId = getState().auth.id
   let data = await profileAPI.saveProfile(profile)
   if (data.resultCode === 0)
      dispatch(getProfile(userId));
   else {
      setStatus((data.messages))
   }
}

export default profileReducer;