const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
   users: [
      { id: 1, followed: true, name: 'Корги', surname: "Милашечкин", img: 'https://porodisobak.ru/wp-content/uploads/2021/07/velsh-korgi-pembrok-11.jpg', status: "Я люблю носиться по дому!", location: { country: "Russia", city: "Saint-Petersburg" } },
      { id: 2, followed: false, name: 'Ориентал', surname: "Милашечкин", img: 'https://porodisobak.ru/wp-content/uploads/2021/07/velsh-korgi-pembrok-11.jpg', status: "Я люблю носиться по дому!", location: { country: "Russia", city: "Saint-Petersburg" } },
      { id: 3, followed: true, name: 'Алабай', surname: "Милашечкин", img: 'https://porodisobak.ru/wp-content/uploads/2021/07/velsh-korgi-pembrok-11.jpg', status: "Я люблю носиться по дому!", location: { country: "Russia", city: "Saint-Petersburg" } },
      { id: 4, followed: false, name: 'Мейн-кун', surname: "Милашечкин", img: 'https://porodisobak.ru/wp-content/uploads/2021/07/velsh-korgi-pembrok-11.jpg', status: "Я люблю носиться по дому!", location: { country: "Russia", city: "Saint-Petersburg" } },
      { id: 5, followed: true, name: 'Мопс', surname: "Милашечкин", img: 'https://porodisobak.ru/wp-content/uploads/2021/07/velsh-korgi-pembrok-11.jpg', status: "Я люблю носиться по дому!", location: { country: "Russia", city: "Saint-Petersburg" } },
      { id: 6, followed: true, name: 'Каракал', surname: "Милашечкин", img: 'https://porodisobak.ru/wp-content/uploads/2021/07/velsh-korgi-pembrok-11.jpg', status: "Я люблю носиться по дому!", location: { country: "Russia", city: "Saint-Petersburg" } },
      { id: 7, followed: false, name: 'Хаски', surname: "Милашечкин", img: 'https://porodisobak.ru/wp-content/uploads/2021/07/velsh-korgi-pembrok-11.jpg', status: "Я люблю носиться по дому!", location: { country: "Russia", city: "Saint-Petersburg" } },
      { id: 8, followed: true, name: 'Сервал', surname: "Милашечкин", img: 'https://porodisobak.ru/wp-content/uploads/2021/07/velsh-korgi-pembrok-11.jpg', status: "Я люблю носиться по дому!", location: { country: "Russia", city: "Saint-Petersburg" } },
      { id: 9, followed: false, name: 'Пудель', surname: "Милашечкин", img: 'https://porodisobak.ru/wp-content/uploads/2021/07/velsh-korgi-pembrok-11.jpg', status: "Я люблю носиться по дому!", location: { country: "Russia", city: "Saint-Petersburg" } },

   ],
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
         return { ...state, users: [...state.users, ...action.users] }
      }
      default:
         return state;
   }

}

export let followAC = (userId) => ({ type: FOLLOW, userId });
export let unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export let setUserAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;