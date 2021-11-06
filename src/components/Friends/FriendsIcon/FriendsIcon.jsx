
import s from './FriendsIcon.module.css'
import { NavLink } from 'react-router-dom';

const FriendsIcon = (props) => {
    let path = "/friends/" + props.id;

    return <div className={s.friend}>
        <NavLink to={path}>
            <div className={s.friendsItem}>
                <div className={s.friendUserAvatar}>
                    <img src={props.img}></img>
                </div>
                <div className={s.friendUserName}>
                    {props.name}
                </div>
            </div>
        </NavLink>
    </div >
}

export default FriendsIcon;