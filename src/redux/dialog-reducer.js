const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const dialogReducer = (state, action) => {
   
    if (action.type === 'ADD-MESSAGE') {
        let newMessage = {
           id: 6,
           message: state.newMessageText,
        };
        state.messages.push(newMessage);
        state.newMessageText = '';
     } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        state.newMessageText = action.newText;
     }
    
    return state;
}

export default dialogReducer;