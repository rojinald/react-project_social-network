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
      debugger;
      setEditMode(false)
      props.updateStatus(status)
   }
   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value)
   }


   return (
      <div>
         {!editMode
            ?
            <div>
               <span onDoubleClick={activateEditMode} >{props.status || "No Status"}</span>
            </div >
            :
            <div>
               <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
            </div>
         }
      </div >
   )
}

export default ProfileStatus;