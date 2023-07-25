import { useFormik } from "formik";
import { signuploginValidate } from "../Service/yupValidation";

const SigninHook = () => {
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

export default SigninHook;
