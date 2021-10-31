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
    return <div className={s.content}>
        <div className={s.dialogsItem}>
            <DialogItem name='Корги' id="1" />
            <DialogItem name='Овчарка' id="2" />
            <DialogItem name='Лобрадор' id="3" />
            <DialogItem name='Доберман' id="4" />
            <DialogItem name='Щпиц' id="5" />
        </div>
        <div className={s.dialogsMessages}>
            <DialogMessage message="Гав Гав!" />
            <DialogMessage message="Хочу кусать себя за хвост!" />
            <DialogMessage message="Пойду грызть тапки" />
        </div>
    </div>
};

export default Dialogs;