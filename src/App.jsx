import "./App.css";
import { Formik, Form, Field } from "formik";
import { loginValidation } from "./loginValidation";
const initialValues = {
  username: "",
  email: "",
  password: "",
  cpassword: "",
};

function App() {
  //remove this
  // const { values, handleBlur, handleSubmit, handleChange, errors } = useFormik({
  //   initialValues: initialValues,
  //   validationSchema: loginValidation,
  //   onSubmit: (value) => {
  //     console.log(value);
  //   },
  // });
  return (
    <>
      <h2>Login</h2>
      <br />

      <Formik initialValues={initialValues} validationSchema={loginValidation}>
        {({ errors }) => (
          <Form action="">
            <label htmlFor="username">Username: </label>
            <br />
            <Field type="text" name="username" />
            <br />
            {errors.username && (
              <small style={{ textAlign: "left", color: "red" }}>
                {errors.username}
              </small>
            )}
            <br />
            <br />
            <label htmlFor="email">Email: </label>
            <br />
            <br />
            <Field type="email" name="email" />
            <br />
            {errors.email && (
              <small style={{ textAlign: "left", color: "red" }}>
                {errors.email}
              </small>
            )}
            <br />
            <br />
            <label htmlFor="password">password: </label>
            <br />
            <br />
            <Field type="password" name="password" autoComplete="on" />
            <br />
            {errors.password && (
              <small style={{ textAlign: "left", color: "red" }}>
                {errors.password}
              </small>
            )}
            <br />
            <br />
            <label htmlFor="cpassword" id="lab">
              confirm password:
            </label>
            <br />
            <br />
            <Field type="password" name="cpassword" autoComplete="on" />
            <br />
            {errors.cpassword && (
              <small style={{ textAlign: "left", color: "red" }}>
                {errors.cpassword}
              </small>
            )}
            <br /> <br />
            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default App;
