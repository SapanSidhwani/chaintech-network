import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  // Function to handle the sign-out action
  const handleSignOut = () => {
    // Remove user details from local storage
    localStorage.removeItem('userDetails');
    // Navigate to the registration page after sign-out
    navigate('/registration');
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Thirteenth navbar example">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <Link className="navbar-brand col-lg-3 me-0" href="/home">ChainTech Network</Link>
          <ul className="navbar-nav col-lg-6 justify-content-lg-center">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
          </ul>
          <div className="d-lg-flex col-lg-3 justify-content-lg-end">
            <Link to={'/login'} className='btn btn-primary me-2'>Login</Link>
            <button className="btn btn-primary" onClick={handleSignOut}>Sign Out</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
