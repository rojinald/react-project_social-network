import React from 'react';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onAddMessage = () => {
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    }

    let onMessageChange = (text) => {
        let action = updateMessageActionCreator(text);
        props.store.dispatch(action);
    }

    return <Dialogs updateMessageText={onMessageChange}
        addMessage={onAddMessage}
        dialogsPage={state}
    />
};

export default DialogsContainer;