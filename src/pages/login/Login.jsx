import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  //   const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please fill in all fields"),
      password: Yup.string().required("Please fill in all fields"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:3000/login",
          values
        );
        alert("Welcome back! You have successfully logged in.");
        localStorage.setItem("token", response.data.token);
        // navigate("/");
      } catch (error) {
        alert("Incorrect email or password. Please try again.");
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-contentMain-mercury">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl">
        <div
          className="w-1/2 p-8 bg-cover bg-center bg-no-repeat flex items-start justify-center"
          style={{
            backgroundImage: "url('public/image/login_image.png')",
          }}
        >
          <div>
            <h2 className="text-contentMain-mercury  text-2xl font-bold">
              The Dough & Pastry Academy
            </h2>
            <p className="text-gray-200   text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse volutpat ullamcorper mattis.
            </p>
          </div>
        </div>

        <div className="w-1/2 p-8">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-textMain-mirage text-center">
              USER LOGIN
            </h2>
            <button
              //   onClick={() => navigate("/")}
              className="text-textMain-mirage hover:text-mirage  text-center mt-2"
            >
              Welcome to The Dough & Pastry Academy
            </button>
          </div>
          <form className="mt-8" onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label className="block text-textSecondary-riverbed">Email</label>
              <input
                type="text"
                name="email"
                className="w-full px-4 py-2 mt-2 border rounded-md text-textSecondary focus:outline-none focus:ring-1 focus:ring-contentHighlight-silver"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-400 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="block text-textSecondary-riverbed">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 mt-2 border rounded-md text-textSecondary focus:outline-none focus:ring-1 focus:ring-contentHighlight-silver"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-400 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  className="form-checkbox"
                  onChange={formik.handleChange}
                  checked={formik.values.rememberMe}
                />
                <span className="ml-2 text-textSecondary-riverbed">
                  Remember Me
                </span>
              </label>
              <a
                href="#"
                className="text-sm text-textSecondary-riverbed hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white bg-textSecondary-riverbed hover:bg-textMain-mirage rounded-md"
              >
                LOGIN
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <button
              //   onClick={() => navigate("/register")}
              className="text-sm text-textSecondary-riverbed hover:underline"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
