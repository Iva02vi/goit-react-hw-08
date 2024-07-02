import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import toast from "react-hot-toast";

const authSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(8, "Too short")
    .max(50, "Too long")
    .required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (userInfo, actions) => {
    console.log(userInfo);
    dispatch(register(userInfo))
      .unwrap()
      .then(() => {
        toast.success("Registration successful!");
      })
      .catch(() => {
        toast.error("The user is already registered");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={authSchema}
    >
      <Form className={css.form}>
        <div className={css.input}>
          <label htmlFor={nameId}>Name</label>
          <Field className={css.field} id={nameId} type="text" name="name" />
          <ErrorMessage name="name" as="span" />
        </div>
        <div className={css.input}>
          <label htmlFor={emailId}>Email</label>
          <Field className={css.field} id={emailId} type="email" name="email" />
          <ErrorMessage name="email" as="span" />
        </div>
        <div className={css.input}>
          <label htmlFor={passwordId}>Password</label>
          <Field
            className={css.field}
            id={passwordId}
            type="password"
            name="password"
          />
          <ErrorMessage name="number" as="span" />
        </div>
        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
