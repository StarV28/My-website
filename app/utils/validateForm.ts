import * as yup from "yup";

export const sendForm = yup.object({
  name: yup
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .max(10)
    .required("This field is required"),
  email: yup
    .string()
    .trim()
    .max(100)
    .email("Invalid email")
    .required("This field is required"),
  subject: yup
    .string()
    .trim()
    .min(5, "Subject must be at least 5 characters")
    .max(150),
  message: yup
    .string()
    .trim()
    .min(5, "Message must be at least 5 characters")
    .max(1000)
    .required("This field is required"),
});
