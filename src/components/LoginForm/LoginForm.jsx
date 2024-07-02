import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import css from "./LoginForm.module.css";

const authSchema = Yup.object().shape({
  email: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(8, "Too short")
    .max(50, "Too long")
    .required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const emailId = useId();
  const passwordId = useId();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (userInfo, actions) => {
    console.log(userInfo);
    dispatch(logIn(userInfo))
      .unwrap()
      .then(() => {
        toast.success("Login successful");
      })
      .catch(() => {
        toast.error("Your enter wrong email or password");
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
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
