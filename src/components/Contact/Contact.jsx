import { useDispatch } from "react-redux";
import s from './Contact.module.css'
import { deleteContactThunk } from "../../redux/contacts/operations";
import { AiOutlineUser, AiTwotonePhone } from "react-icons/ai";

const Contact = ({ id, name, number }) => {

  const dispatch = useDispatch();
  
  const handleDelete = () => dispatch(deleteContactThunk(id));
  
    return (
      <div className={s.wrapper}>
          <div className={s.datacontainer}>
            <p><AiOutlineUser /> {name}</p>
            <p><AiTwotonePhone />{number}</p>
          </div>            
          <button className={s.btn} type="submit" onClick={handleDelete}>Delete</button>
      </div>
    )
  }
  
  export default Contact