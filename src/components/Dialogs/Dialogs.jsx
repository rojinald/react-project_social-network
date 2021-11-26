import React from 'react';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialog-reducer';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import s from './Dialogs.module.css'


const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let action = addMessageActionCreator();
        props.dispatch(action);
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateMessageActionCreator(text);
        props.dispatch(action);
    }


    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} img={d.img} />);

    let MessagesElements = props.state.messages
        .map(m => <DialogMessage message={m.message} />);



    return <div className={s.content}>
        <div className={s.dialogsItem}>
            {dialogsElements}
        </div>
        <div>
            <div>

                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.newMessageText} />
            </div>
            <div>
                <button onClick={addMessage}> Add message </button>
            </div>
            <div className={s.dialogsMessages}>
                {MessagesElements}
            </div>
        </div>

    </div>
};

export default Dialogs;