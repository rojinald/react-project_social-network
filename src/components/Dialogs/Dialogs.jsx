import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import s from './Dialogs.module.css'


const Dialogs = (props) => {


    let dialogsElements = props.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let MessagesElements = props.messages
        .map(m => <DialogMessage message={m.message} />);



    return <div className={s.content}>
        <div className={s.dialogsItem}>
            {dialogsElements}
        </div>
        <div className={s.dialogsMessages}>
            {MessagesElements}
        </div>
    </div>
};

export default Dialogs;