import React from "react";
import axios from "axios";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./style.module.css";
import { useNavigate} from "react-router-dom";

function LoginPage() {
  const nav = useNavigate();
  const [responseResult, setResponseResult] = useState({
    message: "",
    alertClass: "",
  });
  const initialValues = {
    email: "",
    password: "",
  };

  const onsubmit = (values) => {
    axios
      .post("")
      .then(
        (response) => {
          //success
          setResponseResult({
            message: response.data.message,
            alertClass: "alert alert-success",
          });

          localStorage.setItem("toekn",response.data.token)
          localStorage.setItem("user",response.data.user)
          nav("/");
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
    email: Yup.string()
      .required("email is required")
      .email("enter valid email"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password should be min 6 char long"),
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
            <h2>Login</h2>
            <hr />
            <Formik
              initialValues={initialValues}
              onSubmit={onsubmit}
              validationSchema={validationSchema}
              validateOnMount
            >
              {(formik) => {
                return (
                  <Form>
                    <div className="form-group">
                      <label>Email</label>
                      <Field
                        type="text"
                        name="email"
                        className={
                          formik.touched.email && formik.errors.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="email">
                        {(error) => (
                          <span className="text-danger">{error}</span>
                        )}
                      </ErrorMessage>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <Field
                        type="password"
                        name="password"
                        className={
                          formik.touched.password && formik.errors.password
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <ErrorMessage name="password">
                        {(error) => (
                          <span className="text-danger">{error}</span>
                        )}
                      </ErrorMessage>
                    </div>
                    <input
                      type="submit"
                      name="Login"
                      className="btn btn-primary btn-block"
                      disabled={!formik.isValid}
                    />
                  </Form>
                );
              }}
            </Formik>
            <p className="text-center">
              New User?<a href="/register">Click Here</a>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default LoginPage;
