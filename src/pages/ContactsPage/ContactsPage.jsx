import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsError, selectIsLoading } from "../../redux/contacts/selectors";

const ContactsPage = () => {
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch])
  
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);
  
    return (
        <div>
            <h1>Phonebook</h1>
            
            <ContactForm />
            <SearchBox />
            {isLoading && <h2>Loading...</h2>}
            {isError && <h2>Error...</h2>}
      
            <ContactList />
        </div>
    );
  
  }
  
  export default ContactsPage