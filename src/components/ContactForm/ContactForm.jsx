import { useId } from "react";
import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { addContactThunk } from "../../redux/contacts/operations";
import s from  './ContactForm.module.css'

const FeedbackSchema = Yup.object().shape({name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"), number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")});

const ContactForm = () => {

  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: ""
  };
    
  const handleSubmit = (values, options) => {
      dispatch(
        addContactThunk({
          
          name: values.name,
          number: values.number,
        })
      );

      options.resetForm();
    };
  const nameFieldId = useId();
  const numberFieldId = useId();

      return (
        <div className={s.formwrapper}>
            <Formik rmik initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={FeedbackSchema}>
                <Form className={s.form}>
                    <label htmlFor={nameFieldId} className={s.label}>
                      <span>Name</span>
                      <Field type="text" name="name" id={nameFieldId} className={s.input} />
                      <ErrorMessage name="name" component="span" />
                    </label>
                    <label htmlFor={numberFieldId} className={s.label}>
                      <span>Number</span>
                      <Field type="tel" name="number" id={numberFieldId} className={s.input} />
                      <ErrorMessage name="number" component="span" />
                    </label>
                    <div>
                      <button type="submit" className={s.btn} >Add contact</button>
                    </div>                        
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm