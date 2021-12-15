import React from "react"
import s from './Users.module.css'
import userPhoto from '../../assets/images/users.png'

let Users = (props) => {

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   return <div>
      <div>
         {pages.map(p => {
            return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
         })}
      </div>
      {
         props.users.map(u => <div key={u.id} className={s.userItem}>
            <span>
               <div>
                  <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photos} />
               </div>
               <div>
                  {u.followed ? <button onClick={() => { props.unfollow(u.id) }} >Follow</button> : <button onClick={() => { props.follow(u.id) }}>Unfollow</button>}
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
         </div>)
      }
   </div>
}

export default Users;