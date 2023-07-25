import { useFormik } from "formik";

import { signuploginValidate } from "../Service/yupValidation";

const SignupHook = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signuploginValidate,
    onSubmit: (values) => {},
  });
  return { formik };
};

export default SignupHook;
