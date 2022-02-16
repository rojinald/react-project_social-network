import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


const Header = (props) => {
  return <header className={s.header}>
    <img src='http://assets.centralindex.com/W/48/db08933953349172c3dea48efd3ce906.png'></img>

    <div className={s.loginBlock}>
      {
        props.isAuth
          ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
          : <NavLink to={'/login'}>LOGIN</NavLink>
      }
    </div>
  </header>;
};

export default Header;