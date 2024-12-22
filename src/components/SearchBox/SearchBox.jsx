import { useDispatch, useSelector } from "react-redux";
import s from './SearchBox.module.css'
import { setSearchTerm } from "../../redux/filters/slice";

const SearchBox = () => {
    const searchTerm = useSelector((state) => state.filters.name);
    const dispatch = useDispatch();
    const handleInputChange = (event) => {
      dispatch(setSearchTerm(event.target.value));
    };

    return (
        <div>
          <p>Find contacts by name or phonenumber</p>
          <input className={s.input} type="text" placeholder='Search...' value={searchTerm}
          onChange={handleInputChange} />
              
        </div>
    )
}

export default SearchBox