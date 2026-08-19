import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import './style.css'

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/admin/register", {
        username: formData.username,
        password: formData.password,
      });

      alert(response.data.message);

      navigate("/login");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">

      <div className="container">

        <div className="row min-vh-100 align-items-center justify-content-center">

          <div className="col-lg-10">

            <div className="register-wrapper shadow-lg">

              {/* LEFT SIDE */}

              <div className="register-left d-none d-md-flex">

                <div className="register-content">

                  <h1>KRYPOS</h1>

                  <h2>
                    Join.
                    <br />
                    Discover.
                    <br />
                    Explore.
                  </h2>

                  <p>
                    Create your account and discover useful
                    products, deals and recommendations.
                  </p>

                </div>

              </div>


              {/* RIGHT SIDE */}

              <div className="register-right">

                <div className="register-form-container">

                  <div className="text-center mb-4">

                    <h2 className="fw-bold mb-2">
                      Create Account
                    </h2>

                    <p className="text-muted">
                      Join KRYPOS today
                    </p>

                  </div>


                  <form onSubmit={handleSubmit}>

                    {/* USERNAME */}

                    <div className="mb-4">

                      <label className="form-label fw-semibold">
                        Email
                      </label>

                      <input
                        type="email"
                        className="form-control register-input"
                        placeholder="Enter your email"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                      />

                    </div>


                    {/* PASSWORD */}

                    <div className="mb-4">

                      <label className="form-label fw-semibold">
                        Password
                      </label>

                      <input
                        type="password"
                        className="form-control register-input"
                        placeholder="Create a password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />

                    </div>


                    {/* CONFIRM PASSWORD */}

                    <div className="mb-4">

                      <label className="form-label fw-semibold">
                        Confirm Password
                      </label>

                      <input
                        type="password"
                        className="form-control register-input"
                        placeholder="Confirm your password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />

                    </div>


                    {/* REGISTER BUTTON */}

                    <button
                      type="submit"
                      className="btn register-btn w-100"
                      disabled={loading}
                    >

                      {loading
                        ? "Creating Account..."
                        : "Create Account"}

                    </button>

                  </form>


                  <div className="divider">

                    <span>OR</span>

                  </div>


                  <p className="text-center text-muted mb-0">

                    Already have an account?

                    <Link
                      to="/login"
                      className="login-link"
                    >
                      {" "}Login
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

export default Register;