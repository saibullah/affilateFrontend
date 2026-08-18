import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/admin/login", {
        username: formData.username,
        password: formData.password,
      });

      const role = response.data?.admin?.role || "admin";

      alert(response.data.message);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", role);
      localStorage.setItem("login", "true");

      if (role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="row min-vh-100 align-items-center justify-content-center">

          <div className="col-lg-10">
            <div className="login-wrapper shadow-lg">

              {/* LEFT SIDE */}
              <div className="login-left d-none d-md-flex">
                <div className="login-content">
                  <h1>PICKORA</h1>

                  <h2>
                    Discover.
                    <br />
                    Compare.
                    <br />
                    Choose.
                  </h2>

                  <p>
                    Find the best products, explore useful recommendations
                    and make smarter choices.
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="login-right">

                <div className="login-form-container">

                  <div className="text-center mb-4">
                    <h2 className="fw-bold mb-2">
                      Welcome Back
                    </h2>

                    <p className="text-muted">
                      Login to continue to PICKORA
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>

                    {/* USERNAME */}
                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        Email
                      </label>

                      <input
                        type="text"
                        className="form-control login-input"
                        placeholder="Enter your email"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* PASSWORD */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Password
                      </label>

                      <input
                        type="password"
                        className="form-control login-input"
                        placeholder="Enter your password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="text-end mb-4">
                      <Link
                        to="/"
                        className="forgot-link"
                      >
                        Forgot Password?
                      </Link>
                    </div>

                    {/* LOGIN BUTTON */}
                    <button
                      type="submit"
                      className="btn login-btn w-100"
                    >
                      Login
                    </button>

                  </form>

                  <div className="divider">
                    <span>OR</span>
                  </div>

                  <p className="text-center text-muted mb-0">
                    Don't have an account?

                    <Link
                      to="/register"
                      className="register-link"
                    >
                      {" "}Create Account
                    </Link>
                  </p>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;