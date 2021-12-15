const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

let initialState = {
   users: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
}

const usersReducer = (state = initialState, action) => {
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
            users: state.users.map(users => {
               if (users.id === action.userId) {
                  return { ...users, followed: false }
               }
               return users;
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
      default:
         return state;
   }

}

export let followAC = (userId) => ({ type: FOLLOW, userId });
export let unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export let setUserAC = (users) => ({ type: SET_USERS, users });
export let setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export let setUsersTotalCountAC = (totalUsersCount) => ({ type: SET_TOTAL_COUNT, totalUsersCount });

export default usersReducer;