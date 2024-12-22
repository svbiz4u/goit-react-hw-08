import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import Layout from "./components/Layout/Layout";
import { Route, Routes, } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import Login from "./pages/LoginPage/Login";
import Home from "./pages/HomePage/Home";
import Registration from "./pages/RegistrationPage/Registration";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// import './App.css'


const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch])
const isRefreshing = useSelector(selectIsRefreshing);
  // const isLoading = useSelector(selectIsLoading);
  // const isError = useSelector(selectIsError);

  return isRefreshing ? (
    <h2>Loading</h2>
  ) : (
    <Layout>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='contacts' element={<PrivateRoute component={<ContactsPage /> } redirectTo='/login' />} />
        <Route path='login' element={<RestrictedRoute component={<Login />} redirectTo='/contacts' />} />
        <Route path='register' element={<RestrictedRoute component={<Registration />} redirectTo='/contacts' />} />
      
      <Route path='*' element={<NotFoundPage /> } />
        </Routes>
    </Layout>
  );
};

export default App





// import './App.css'
// import ContactForm from './components/ContactForm/ContactForm'
// import SearchBox from './components/SearchBox/SearchBox';
// import ContactList from './components/ContactList/ContactList';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from './redux/contactsOps';
// import { selectIsError, selectIsLoading } from './redux/contactsSlice';

// function App() {
    
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch])

//   const isLoading = useSelector(selectIsLoading);
//   const isError = useSelector(selectIsError);

//   return (
//     <div>
//       <h1>Phonebook</h1>
      
//       <ContactForm />
//       <SearchBox />
//       {isLoading && <h2>Loading...</h2>}
//       {isError && <h2>Error...</h2>}

//       <ContactList />
//     </div>
//   );
// };

// export default App
