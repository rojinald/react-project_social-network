import dialogReducer from "./dialog-reducer";
import friendsSideBarReducer from "./friendsSideBar-reducer";
import profileReducer from "./profile-reducer";

let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: 'Давай дружить!', likesCount: 50 },
            { id: 2, message: 'Это мой первый пост :)', likesCount: 10 },
         ],
         newPostText: 'test'
      },
      dialogsPage: {
         messages:
            [
               { id: 1, message: 'Гав Гав!' },
               { id: 2, message: 'Хочу кусать себя за хвост!' },
               { id: 3, message: 'Пора грызть тапки' },
               { id: 4, message: 'Пошли гулять' },
               { id: 5, message: 'Обними меня' },
            ],

         newMessageText: 'test',


         dialogs: [
            { id: 1, name: 'Корги', img: 'https://porodisobak.ru/wp-content/uploads/2021/07/velsh-korgi-pembrok-11.jpg' },
            { id: 2, name: 'Овчарка', img: 'https://nekusaka.com/wp-content/uploads/2017/02/german_shepherd14.jpg' },
            { id: 3, name: 'Лобрадор', img: 'https://38.img.avito.st/image/1/c2sm17ax34IQYF2PTI4wD9h034aadtWA' },
            { id: 4, name: 'Доберман', img: 'https://sun9-41.userapi.com/impg/n-tSBou1cVzoRXJKjMRf9VElWsnynsTsl1kT7A/e65NXEbZjLQ.jpg?size=604x585&quality=96&sign=7c6849290d6c120693b6882694602e88&type=album' },
            { id: 5, name: 'Шпиц', img: 'https://sun9-9.userapi.com/impf/Rc_cafcy2i0gvFB_D93VZuJWEQO6kr-KAhp4Zw/uF6JVyDWbCY.jpg?size=604x604&quality=96&sign=dde08087567a35f8cf516e2b14f7775c&type=album' }
         ],

      },
      friendsSideBar: {
         friends: [
            { id: 1, name: 'Корги', img: 'https://porodisobak.ru/wp-content/uploads/2021/07/velsh-korgi-pembrok-11.jpg' },
            { id: 2, name: 'Овчарка', img: 'https://nekusaka.com/wp-content/uploads/2017/02/german_shepherd14.jpg' },
            { id: 3, name: 'Лобрадор', img: 'https://38.img.avito.st/image/1/c2sm17ax34IQYF2PTI4wD9h034aadtWA' },
            { id: 4, name: 'Доберман', img: 'https://sun9-41.userapi.com/impg/n-tSBou1cVzoRXJKjMRf9VElWsnynsTsl1kT7A/e65NXEbZjLQ.jpg?size=604x585&quality=96&sign=7c6849290d6c120693b6882694602e88&type=album' },
            { id: 5, name: 'Шпиц', img: 'https://sun9-9.userapi.com/impf/Rc_cafcy2i0gvFB_D93VZuJWEQO6kr-KAhp4Zw/uF6JVyDWbCY.jpg?size=604x604&quality=96&sign=dde08087567a35f8cf516e2b14f7775c&type=album' }

         ]
      }
   },
   _callSubsciber() {
      console.log('State was changed')
   },

   getState() {
      return this._state;
   },
   subscribe(observer) {
      this._callSubsciber = observer;
   },

   dispatch(action) {

      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
      this._state.friendsSideBar = friendsSideBarReducer(this._state.friendsSideBar, action);

      this._callSubsciber(this._state);
   }


}


export default store;
window.store = store;