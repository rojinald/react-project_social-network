import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const ProfileStatus = (props) => {
   const [editMode, setEditMode] = useState(false)
   const [status, setStatus] = useState(props.status)

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])

   const activateEditMode = () => {
      setEditMode(true)
   }
   const deactivateEditMode = () => {
      setEditMode(false)
      props.updateStatus(status)
   }
   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value)
   }


   return (
      <span>
         {!editMode
            ?
            <span>
               <span onDoubleClick={props.isOwner && activateEditMode} >{props.status || "No Status"}</span>
            </span >
            :
            <span>
               <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
            </span>
         }
      </span >
   )
}

export default ProfileStatus;