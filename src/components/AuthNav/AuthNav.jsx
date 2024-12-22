import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './AuthNav.module.css'


const AuthNav = () => {

    const buildLinkClass = ({ isActive }) => {
        return clsx(s.link, isActive && s.activeLink);
      };
    
      return (
        <div className={s.wrap}>
          <NavLink className={buildLinkClass} to='/login'>
              Login
          </NavLink>
          <NavLink className={buildLinkClass} to='/register'>
              Register
          </NavLink>
        </div>
      )
    }
    
    export default AuthNav