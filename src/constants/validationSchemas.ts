import * as Yup from "yup";

export const signUpValidationSchema = Yup.object({
  full_name: Yup.string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .required("Full name is required"),

  phone_number: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),

  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  isAgency: Yup.string()
    .oneOf(["yes", "no"], "Please select an option")
    .required("Please select if you are an agency"),
});

export const signInValidationSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
