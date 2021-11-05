
import s from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog}>
        <NavLink to={path}>
            <div className={s.dialogItem}>
                <div className={s.dialogUserAvatar}>
                    <img src={props.img}></img>
                </div>
                <div className={s.dialogUserName}>
                    {props.name}
                </div>
            </div>
        </NavLink>
    </div >
}

export default DialogItem;