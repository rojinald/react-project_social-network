import React from "react"
import s from './Users.module.css'
import userPhoto from '../../assets/images/users.png'
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

let Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   return <div className={s.usersWrapper}>
      <div>
         {pages.map(p => {
            return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => { props.pageChange(p, props.pageSize) }}>{p}</span>
         })}
      </div>
      {
         props.users.map(u => <div key={u.id} className={s.userItem}>
            <span>
               <div>
                  <NavLink to={'/profile/' + u.id}>
                     <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photos} />
                  </NavLink>
               </div>
               <div>
                  {u.followed
                     ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.subscriptionUnfollow(u.id) }} >unfollow</button>
                     : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.subscriptionFollow(u.id) }} >follow</button>
                  }
               </div>
            </span>
            <span>
               <span>
                  <div>{u.name}, {"u.surname"}</div>
                  <div>{"u.status"}</div>
               </span>
               <span>
                  <div>{"u.location.country"}</div>
                  <div>{"u.location.city"}</div>
               </span>
            </span>
         </div >)
      }
   </div >
}

export default Users;
