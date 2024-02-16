import * as Yup from "yup";

export const loginValidation = Yup.object({
  username: Yup.string().min(6).required("enter your name"),
  email: Yup.string()
    .email("please enter valid email")
    .required("enter your email"),
  password: Yup.string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      "Password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long"
    )
    .required("Enter your password"),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password")], "password must match")
    .required("please rewrite your password"),
});
