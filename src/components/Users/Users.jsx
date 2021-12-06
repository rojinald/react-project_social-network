import React from 'react';
import s from './Users.module.css'

let Users = (props) => {
    return <div>
        {
            props.users.map(u => <div key={u.id} className={s.userItem}>
                <span>
                    <div>
                        <img src={u.img} className={s.userPhoto} />
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => { props.unfollow(u.id) }} >Follow</button> : <button onClick={() => { props.follow(u.id) }}>Unfollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}, {u.surname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>

            </div>)
        }
    </div>
};

export default Users;