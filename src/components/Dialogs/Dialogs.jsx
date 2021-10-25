import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
const Dialogs = (props) => {
    return  <div className = {s.content}>
      <div className={s.dialogsItem}>
          <div className={s.dialog}>
            <NavLink to = "/dialogs/1">Корги</NavLink>
              </div>
          <div className={s.dialog}>
          <NavLink to = "/dialogs/2">Овчарка</NavLink>
              </div>
          <div className={s.dialog}>
          <NavLink to = "/dialogs/3">Лобрадор</NavLink>
              </div>
          <div className={s.dialog}>
          <NavLink to = "/dialogs/4">Доберман</NavLink>
              </div>
          <div className={s.dialog}>
          <NavLink to = "/dialogs/5">Шпиц</NavLink>
              </div>
      </div>
      <div className={s.dialogsMessages}>
          <div className={s.message}>Гав гав</div>
          <div className={s.message}>Хочу кусать себя за ховст</div>
          <div className={s.message}>Я хочу есть!!</div>
      </div>
    </div>
};

export default Dialogs;