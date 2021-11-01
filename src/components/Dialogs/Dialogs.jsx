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
    let dialogsData = [
        { id: 1, name: 'Корги' },
        { id: 2, name: 'Овчарка' },
        { id: 3, name: 'Лобрадор' },
        { id: 4, name: 'Доберман' },
        { id: 5, name: 'Щпиц' }
    ]

    let MessagesData = [
        { id: 1, message: 'Гав Гав!' },
        { id: 2, message: 'Хочу кусать себя за хвост!' },
        { id: 3, message: 'Пора грызть тапки' },
        { id: 4, message: 'Пошли гулять' },
        { id: 5, message: 'Обними меня' }
    ]

    return <div className={s.content}>
        <div className={s.dialogsItem}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
            <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        </div>
        <div className={s.dialogsMessages}>
            <DialogMessage message={MessagesData[0].message} />
            <DialogMessage message={MessagesData[1].message} />
            <DialogMessage message={MessagesData[2].message} />
            <DialogMessage message={MessagesData[3].message} />
            <DialogMessage message={MessagesData[4].message} />
        </div>
    </div>
};

export default Dialogs;