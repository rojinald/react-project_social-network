import { userAPI } from "../api/api";
import { UsersType } from "../types/types";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS   ';


let initialState = {
   users: [] as Array<UsersType>,
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: true,
   followingInProgress: [] as Array<number>, // aray of users ids
}

export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u;
            })
         };
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u;
            })
         };
      case SET_USERS: {
         return { ...state, users: action.users }
      };
      case SET_CURRENT_PAGE: {
         return { ...state, currentPage: action.currentPage }
      };
      case SET_TOTAL_COUNT: {
         return { ...state, totalUsersCount: action.totalUsersCount }
      };
      case TOGGLE_IS_FETCHING: {
         return { ...state, isFetching: action.isFetching }
      };
      case TOGGLE_IS_FOLLOWING_PROGRESS: {
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter(id => id != action.userId)
         }
      };
      default:
         return state;
   }

}

type FollowActionType = {
   type: typeof FOLLOW
   userId: number
}
export const follow = (userId: number): FollowActionType => ({ type: FOLLOW, userId });
type UnfollowActionType = {
   type: typeof UNFOLLOW
   userId: number
}
export const unfollow = (userId: number): UnfollowActionType => ({ type: UNFOLLOW, userId });
type SetUsersActionType = {
   type: typeof SET_USERS
   users: UsersType
}
export const setUsers = (users: UsersType): SetUsersActionType => ({ type: SET_USERS, users });
type SetCurrentPageActionType = {
   type: typeof SET_CURRENT_PAGE
   currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage });
type SetUsersTotalCountActionType = {
   type: typeof SET_TOTAL_COUNT
   totalUsersCount: number
}
export const setUsersTotalCount = (totalUsersCount: number): SetUsersTotalCountActionType => ({ type: SET_TOTAL_COUNT, totalUsersCount });
type ToggleIsFetchingActionType = {
   type: typeof TOGGLE_IS_FETCHING
   isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching });
type ToggleFollowingProgressActionType = {
   type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
   isFetching: boolean
   userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const getUsers = (currentPage: string, pageSize: string) => async (dispatch: any) => {
   dispatch(toggleIsFetching(true));
   let data = await userAPI.getUsers(currentPage, pageSize)
   dispatch(toggleIsFetching(false));
   dispatch(setUsers(data.items));
   dispatch(setUsersTotalCount(data.totalCount));
}
export const pageChange = (pageNumber: number, pageSize: number) => async (dispatch: any) => {
   dispatch(setCurrentPage(pageNumber));
   dispatch(toggleIsFetching(true));
   let data = await userAPI.getChangePage(pageNumber, pageSize)
   dispatch(toggleIsFetching(false));
   dispatch(setUsers(data.items));
}

export const subscriptionUnfollow = (userId: number) => async (dispatch: any) => {
   dispatch(toggleFollowingProgress(true, userId));
   let data = await userAPI.deleteSubscription(userId)
   if (data.resultCode == 0) {
      dispatch(unfollow(userId))
   }
   dispatch(toggleFollowingProgress(false, userId));
}

export const subscriptionFollow = (userId: number) => async (dispatch: any) => {
   dispatch(toggleFollowingProgress(true, userId));
   let data = await userAPI.postSubscription(userId)
   if (data.resultCode == 0) {
      dispatch(follow(userId))
   }
   dispatch(toggleFollowingProgress(false, userId));
}
export default usersReducer;