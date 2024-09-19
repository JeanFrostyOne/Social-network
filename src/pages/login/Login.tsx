import { ErrorMessage, Field, Form, Formik } from "formik";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/navBar/Nav";
import st from "./login.module.scss";
import * as Yup from "yup";
import { useAppDispatch } from "../../redux/store";
import { loginUser } from "../../redux/slices/userReducer";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const initialValues = {
    username: "",
    password: "",
    email: "",
    agree: false,
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "name is too small")
      .max(100, "name is too long")
      .required("username is required"),
    password: Yup.string()
      .min(3, "password is too small")
      .max(100, "password is too long")
      .required("password is required"),
    email: Yup.string(),
    agree: Yup.bool().oneOf([true], "you must agree"),
  });

  function handleSubmit(values: any) {
    dispatch(
      loginUser({ username: values.username, password: values.password })
    ).then((data: any) => {
      if (data.error) {
        alert("check your login or password");
        return;
      }
      navigate("/");
    });
  }
  return (
    <div className={st.root}>
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        {({ dirty, isValid }) => {
          return (
            <Form>
              <div className={st.loginContainer}>
                <div className={st.titleBox}>
                  <h3 className={st.Maintitle}>Welcome to ABC</h3>
                  <p className={st.title}>Be great at what you do!</p>
                </div>
                <div>
                  <div className={st.form}>
                    <h3>Get Started - it's Free!</h3>
                    <div className={st.inputContainer}>
                      <Field
                        name="username"
                        className={st.inputName}
                        type="text"
                        placeholder="Your name"
                        autoFocus
                      />
                      <ErrorMessage
                        className={st.inputError}
                        name="username"
                        component="span"
                      />
                    </div>

                    <Field
                      name="email"
                      className={st.inputEmail}
                      type="email"
                      placeholder="Email address"
                    />
                    <div className={st.inputContainer}>
                      <Field
                        name="password"
                        className={st.inputPassword}
                        type="password"
                        placeholder="Password"
                      />
                      <ErrorMessage
                        className={st.inputError}
                        name="password"
                        component="span"
                      />
                    </div>
                    <div className={st.inputContainer}>
                      <div className={st.checkbox}>
                        <Field name="agree" type="checkbox" />

                        <p>
                          I agree with{" "}
                          <span className={st.boldText}>Privacy Policy</span>{" "}
                          and <span className={st.boldText}>Terms of Use</span>
                        </p>
                      </div>
                      <ErrorMessage
                        className={st.inputError}
                        name="agree"
                        component="span"
                      />
                    </div>

                    <button
                      disabled={!(dirty && isValid)}
                      className={st.buttonSubmit}
                      type="submit"
                    >
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>

      <Footer />
    </div>
  );
}
