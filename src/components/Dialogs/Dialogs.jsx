import React from 'react';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialog-reducer';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import s from './Dialogs.module.css'


const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateMessageText(text);
    }


    let dialogsElements = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} img={d.img} />);

    let MessagesElements = props.dialogsPage.messages
        .map(m => <DialogMessage message={m.message} />);



    return <div className={s.content}>
        <div className={s.dialogsItem}>
            {dialogsElements}
        </div>
        <div>
            <div>

                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText} />
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