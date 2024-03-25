import { useState } from "react";
import axios from "axios";
import styles from "./style.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const nav = useNavigate();
  const [responseResult, setResponseResult] = useState({
    message: "",
    alertClass: "",
  });
  const initialValues = {
    firstName: "",
    email: "",
    password: "",
    mobile: "",
  };

  const onSubmit = (values) => {
    axios
      .post("")
      .then(
        (response) => {
          //success
          setResponseResult({
            message: response.data.message,
            alertClass: "alert alert-success",
          });
          nav("/login");
        },
        (error) => {
          //error
          setResponseResult({
            message: error.response.data.message,
            alertClass: "alert alert-danger",
          });
        }
      )
      .catch((error) => console.log(error));

    console.log(values);
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    email: Yup.string()
      .required("email is required")
      .email("email should be valid email"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password should be min 6 char long"),
    mobile: Yup.string().required("mobile is required"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className={styles.wrapper}>
            <div class={responseResult.alertClass} role="alert">
              {responseResult.message}
            </div>
            <h2>Register</h2>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  className={
                    formik.touched.firstName && formik.errors.firstName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <span className="text-danger">{formik.errors.firstName}</span>
                ) : null}
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <span className="text-danger">{formik.errors.email}</span>
                ) : null}
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <span className="text-danger">{formik.errors.password}</span>
                ) : null}
              </div>
              <div className="form-group">
                <label>Mobile</label>
                <input
                  type="number"
                  name="mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  className={
                    formik.touched.mobile && formik.errors.mobile
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  onBlur={formik.handleBlur}
                />
                {formik.touched.mobile && formik.errors.mobile ? (
                  <span className="text-danger">{formik.errors.mobile}</span>
                ) : null}
              </div>
              <input
                type="submit"
                value="Register"
                className="btn btn-primary btn-block"
                disabled={!formik.isValid}
              />
            </form>

            <br />
            <p className="text-center">
              Already Registered?<a href="/login">Click Here</a>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default RegisterPage;
