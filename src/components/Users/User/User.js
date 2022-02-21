import React from "react"
import s from './User.module.css'
import userPhoto from '../../../assets/images/users.png'
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


const User = ({ user, followingInProgress, subscriptionUnfollow, subscriptionFollow }) => {
   return <div className={s.userItem}>
      <span>
         <div>
            <NavLink to={'/profile/' + user.id}>
               <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.photos} />
            </NavLink>
         </div>
         <div>
            {user.followed
               ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { subscriptionUnfollow(user.id) }} >unfollow</button>
               : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { subscriptionFollow(user.id) }} >follow</button>
            }
         </div>
      </span>
      <span>
         <span>
            <div>{user.name}, {"user.surname"}</div>
            <div>{"user.status"}</div>
         </span>
         <span>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
         </span>
      </span>
   </div>
}

export default User;
