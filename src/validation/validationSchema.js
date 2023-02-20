import { object, string } from "yup";

export const validationSchemaSignIn = object().shape({
  email: string()
    .email("the structure of email is not valid ")
    .required("The Email Field is required"),
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("The Password Field  is required"),
});
export const validationSchemaRegister = object().shape({
  name: string()
    .min(6, "Name should be more than 6 characters long")
    .max(20)
    .required("The Name Field is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: string()
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#*$%^&])(?=.{8,})/,
      "Password must contain at least One Char uppercase letter  , One Char lowercase letter,  1 number, and 1 special character"
    )
    .required("he Password Field  is required"),
});
