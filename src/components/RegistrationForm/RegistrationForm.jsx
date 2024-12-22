import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

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
      <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Registration</h1>
                  <p className="py-6">
                  Please input required information
                  </p>
              </div>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                  <Form className="card-body">
                      <div className="form-control">
                          <label className="label">
                            <span className="label-text">Name</span>
                          </label>
                          <Field name='name' type="text" placeholder="name" className="input input-bordered" required />
                      </div>
                      <div className="form-control">
                          <label className="label">
                            <span className="label-text">Email</span>
                          </label>
                          <Field name='email' type="email" placeholder="email" className="input input-bordered" required />
                      </div>
                      <div className="form-control">
                          <label className="label">
                             <span className="label-text">Password</span>
                          </label>
                           <Field name='password' type="password" placeholder="password" className="input input-bordered" required />
                          <label className="label">                            
                          </label>
                      </div>
                      <div className="form-control mt-6">
                         <button className="btn btn-primary" type='submit'>Register</button>
                      </div>
                  </Form>                  
                </Formik>
              </div>
          </div>
      </div>
    )
}

export default RegistrationForm