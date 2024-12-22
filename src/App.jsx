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

import './App.css'

const App = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(refresh());
    }, [dispatch])
    const isRefreshing = useSelector(selectIsRefreshing);

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