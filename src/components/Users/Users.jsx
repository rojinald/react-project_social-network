import React from "react"
import s from './Users.module.css'
import { Paginator } from "../common/Paginator/Paginator";
import User from "./User/User";



const Users = ({ totalUsersCount, pageSize, currentPage, pageChange, users, followingInProgress, subscriptionUnfollow, subscriptionFollow, ...props }) => {
   return <div className={s.usersWrapper}>
      <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} pageChange={pageChange} />
      {
         users.map(u => <User user={u}
            key={u.id}
            className={s.userItem}
            followingInProgress={followingInProgress}
            subscriptionUnfollow={subscriptionUnfollow}
            subscriptionFollow={subscriptionFollow} />)
      }
   </div >
}

export default Users;
