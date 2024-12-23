import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import s from './UserMenu.module.css'

const UserMenu = () => {

        const user = useSelector(selectUser);
            const dispatch = useDispatch();
        
          return (
              <div className={s.wrap}>
                  <div>Welcome, {user.name}</div>
                  <button onClick={() => dispatch(logout())} className='btn btn-secondary'>Log Out</button>
              </div>
          )
    }
    
    export default UserMenu