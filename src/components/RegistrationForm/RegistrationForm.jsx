import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import s from './RegistrationForm.module.css'


const RegistrationForm = () => {
      const dispatch = useDispatch();
      const initialValues = {
          name: '',
          email: '',
          password: '',
      }
      const handleSubmit = (values, options) => {
          dispatch(register(values));
          options.resetForm();
      }
      
    return (
        <div className={s.formwrapper}>    
              <div>
                  <h1>Registration</h1>
                  <p> Please input required information </p>
              </div>
              <div>
                <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                  <Form className={s.form}>
                      <div> 
                          <label className={s.label}>
                             <span>Name</span>
                          </label>
                          <Field name='name' type="text" placeholder="" className={s.input} required />
                      </div>
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
                        <label className={s.label}> 
                        </label>
                      </div>
                      <div>
                         <button className={s.btn} type='submit'>Register</button>
                      </div>
                  </Form>                  
                </Formik>
              </div>          
      </div>
    )
}

export default RegistrationForm