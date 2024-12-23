import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import s from './LoginForm.module.css'


const LoginForm = () => {

  const dispatch = useDispatch();
  const initialValues = {
          email: '',
          password: '',
  }
  const handleSubmit = (values, options) => {
          dispatch(login(values))
              .unwrap()
              .then(res => {
                  toast(`Welcome, ${res.user.name}!`);
              })
              .catch(() => {
                  toast.error('invalid credentials');
              });
          options.resetForm();
  }
    return (   
      <div>  
          <h1>Please login</h1>
              <Formik onSubmit={handleSubmit} initialValues={initialValues}> 
                <Form className={s.form}>
                  <div>
                    <label className={s.label}>
                        <span>Email</span>
                    </label>
                        <Field name='email' type="email" placeholder="" className={s.input} required />
                  </div>
                  <div>
                    <label className={s.label}>
                        <span>Password</span>
                    </label>                           
                        <Field name='password' type="password" placeholder="" className={s.input} required />
                  </div>
                  <div>
                       <button className={s.btn} type="submit">Login</button>
                  </div>
                </Form>
              </Formik>
      </div>
    )
}

export default LoginForm