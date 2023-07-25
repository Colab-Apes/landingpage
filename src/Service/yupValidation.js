import * as yup from "yup";

export const baseurl = "https://gigamoni-backend.onrender.com/api/v1";
export const signuploginValidate = yup.object().shape({
    email: yup
      .string()
      .email("please enter a valid email")
      .required("Please fill up this field"),
    password: yup.string().required("Please fill up this field"),
  });