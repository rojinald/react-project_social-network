import React from "react"
import s from './Paginator.module.css'


export const Paginator = ({ totalUsersCount, pageSize, currentPage, pageChange }) => {
   let pagesCount = Math.ceil(totalUsersCount / pageSize);

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }
   return <div>
      {pages.map(p => {
         return <span className={currentPage === p && s.selectedPage} onClick={(e) => { pageChange(p, pageSize) }}>{p}</span>
      })}
   </div>
}