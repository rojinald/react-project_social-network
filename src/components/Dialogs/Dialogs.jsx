import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div >
}

const DialogMessage = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: 'Корги' },
        { id: 2, name: 'Овчарка' },
        { id: 3, name: 'Лобрадор' },
        { id: 4, name: 'Доберман' },
        { id: 5, name: 'Щпиц' }
    ]

    let messages = [
        { id: 1, message: 'Гав Гав!' },
        { id: 2, message: 'Хочу кусать себя за хвост!' },
        { id: 3, message: 'Пора грызть тапки' },
        { id: 4, message: 'Пошли гулять' },
        { id: 5, message: 'Обними меня' }
    ]


    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id} />);

    let MessagesElements = messages
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