const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
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

}

const dialogReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_MESSAGE:
         let newMessage = {
            id: 6,
            message: state.newMessageText,
         };
         state.messages.push(newMessage);
         state.newMessageText = '';
         return state;
      case UPDATE_NEW_MESSAGE_TEXT:
         state.newMessageText = action.newText;
         return state;
      default:
         return state;
   }

}

export let addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export let updateMessageActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogReducer;