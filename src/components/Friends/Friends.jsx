import FriendsIcon from './FriendsIcon/FriendsIcon';
import s from './Friends.module.css'


const Friends = (props) => {

    let friendsIconElements = props.friendsSideBar.friends
        .map(d => <FriendsIcon name={d.name} id={d.id} img={d.img} key={d.id} />);

    return <div className={s.content}>
        <div className={s.friendsIcon}>
            {friendsIconElements}
        </div>
    </div>
};

export default Friends;