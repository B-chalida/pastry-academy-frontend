import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegistrationPage() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      nickname: "",
      dateOfBirth: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please fill in all fields"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Please fill in all fields"),
      nickname: Yup.string().required("Please fill in all fields"),
      dateOfBirth: Yup.date().required("Please fill in all fields"),
    }),
    onSubmit: async (values) => {
      try {
        const resp = await axios.post("http://localhost:3000/register", values);
        alert("Registration successful!");
        navigate("/login");
      } catch (error) {
        console.error("Registration error:", error);
        setError(
          error.response.data.message ||
            "Registration failed. Please try again."
        );
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-contentMain-mercury">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-textMain-mirage text-center">
          USER REGISTRATION
        </h2>
        <p
          onClick={() => navigate("/")}
          className="text-textMain-mirage text-center mt-2"
        >
          Welcome to The Dough & Pastry Academy
        </p>
        <form className="mt-8" onSubmit={formik.handleSubmit}>
          {error && <div className="text-red-400 mb-4">{error}</div>}
          <div className="mb-4">
            <label className="block text-textSecondary-riverbed">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 mt-2 border rounded-md text-textSecondary-riverbed focus:outline-none focus:ring-1 focus:ring-contentHighlight-silver"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-400 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block text-textSecondary">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 mt-2 border rounded-md text-textSecondary-riverbed focus:outline-none focus:ring-1 focus:ring-contentHighlight-silver"
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
          <div className="mb-4">
            <label className="block text-textSecondary-riverbed">
              Nickname
            </label>
            <input
              type="text"
              name="nickname"
              className="w-full px-4 py-2 mt-2 border rounded-md text-textSecondary-riverbed focus:outline-none focus:ring-1 focus:ring-contentHighlight-silver"
              placeholder="Enter your nickname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.nickname}
            />
            {formik.touched.nickname && formik.errors.nickname ? (
              <div className="text-red-400 text-sm">
                {formik.errors.nickname}
              </div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block text-textSecondary-riverbed">
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              className="w-full px-4 py-2 mt-2 border rounded-md text-textSecondary-riverbed focus:outline-none focus:ring-1 focus:ring-contentHighlight-silver"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dateOfBirth}
            />
            {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
              <div className="text-red-400 text-sm">
                {formik.errors.dateOfBirth}
              </div>
            ) : null}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white bg-textSecondary-riverbed hover:bg-textMain-mirage rounded-md"
            >
              REGISTER
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/login")}
            className="text-sm text-textSecondary-riverbed hover:underline"
          >
            Already have an account? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
