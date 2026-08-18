// import React from 'react'
// import '../styles/Register.css'
// import { Link, useNavigate } from 'react-router-dom'
// import { useState } from 'react'
// import api from '../api/api'

// function Register() {
//   const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   })

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await api.post("/auth/register", {
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//       });

//       alert(response.data.message);

//       navigate("/login");
//     } catch (error) {
//       alert(error.response?.data?.message || "Registration Failed");
//     }
//   };
//   return (

//     <div className="register-page">
//       <div className="container">
//         <div className="row justify-content-center align-items-center min-vh-100">
//           <div className="col-md-8 col-lg-6 col-xl-5">

//             <div className="register-card shadow-lg">

//               <div className="text-center mb-4">
//                 <h2 className="fw-bold">Create Account</h2>
//                 <p className="text-muted">
//                   Join us and start your journey today.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit}>

//                 <div className="mb-3">
//                   <label className="form-label fw-semibold">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     name='name'
//                     className="form-control custom-input"
//                     placeholder="Enter your full name"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label fw-semibold">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name='email'
//                     className="form-control custom-input"
//                     placeholder="Enter your email"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="mb-4">
//                   <label className="form-label fw-semibold">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name='password'
//                     className="form-control custom-input"
//                     placeholder="Enter your password"
//                     value={formData.password}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <button type='submit' className="btn register-btn w-100">
//                   Create Account
//                 </button>

//                 <p className="text-center mt-4 text-muted">
//                   Already have an account?
//                   <Link to="/login" className="login-link"> Login</Link>
//                 </p>

//               </form>

//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Register