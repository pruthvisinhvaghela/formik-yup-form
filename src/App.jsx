import "./App.css";
import { useFormik } from "formik";
import { loginValidation } from "./loginValidation";
const initialValues = {
  username: "",
  email: "",
  password: "",
  cpassword: "",
};

function App() {
  const { values, handleBlur, handleSubmit, handleChange, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: loginValidation,
    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <>
      <h2>Login</h2>
      <br />
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <br />
        <input
          type="text"
          name="username"
          value={values.username}
          onBlur={handleBlur}
          onChange={handleChange}
        />
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
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
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
        <input
          type="password"
          name="password"
          autoComplete="on"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
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
        <input
          type="password"
          name="cpassword"
          autoComplete="on"
          value={values.cpassword}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <br />
        {errors.cpassword && (
          <small style={{ textAlign: "left", color: "red" }}>
            {errors.cpassword}
          </small>
        )}
        <br /> <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default App;
