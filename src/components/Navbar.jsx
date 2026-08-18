import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">

        <a className="navbar-brand fw-bold" href="/">
      KRYPOS
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#products">
                Products
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="/login">
              Login
              </a>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;



// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import '../styles/Nav.css'
// function Navabar() {
//   const navigate = useNavigate()
//   const handleLogout = () => {
//     localStorage.removeItem("token")
    
//     navigate("/login")
//   };
//   return (
//     <section id='navbar'>
//     <div className="nav-wrapper">
//       <nav className="navbar navbar-expand-lg premium-navbar px-4">

//         <Link
//           to="/"
//           className="navbar-brand logo text-white fw-bold fs-3"
//         >
//           JobPortal
//         </Link>

//         <ul className="navbar-nav ms-auto">

//           <li className="nav-item">
//             <Link to="/" className="nav-link premium-link">
//               Home
//             </Link>
//           </li>
         
//           <li className="nav-item">
//             <a href="#contact" className="nav-link premium-link">Contact</a>
//           </li>

//           <li className="nav-item">
//             <a href='#contact' className="nav-link premium-link">
//               About Us
//             </a>
//           </li>
//           <li className="nav-item">

//             <button className='btn btn-dark'
//               onClick={handleLogout}>
//               Logout
//             </button>

//           </li>

//         </ul>

//       </nav>
//     </div>
//     </section>
//   )
// }

// export default Navabar