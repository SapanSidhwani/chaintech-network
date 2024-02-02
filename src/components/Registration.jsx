import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Registration = () => {

  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update user details based on the changed input
    setUserDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the entered password matches the confirmation password
    if (userDetails.password === userDetails.confirmPassword) {
      // Store user details in local storage
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      // Navigate to the home page on successful registration
      navigate('/');
    } else {
      // Reset user details and navigate back to the registration page if passwords don't match
      setUserDetails({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      navigate('/registration');
    }
  };
  return (
    <div className='registration-page rounded-4 border border-1 bg-body-tertiary mb-4'>
    <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
      <li className="nav-item" role="presentation">
          <Link className="nav-link" id="tab-login" data-mdb-toggle="pill" to="/login" role="tab"
          aria-controls="pills-login" aria-selected="false">Login</Link>
      </li>
      <li className="nav-item" role="presentation">
          <Link className="nav-link active" id="tab-register" data-mdb-toggle="pill" to="/registration" role="tab"
          aria-controls="pills-register" aria-selected="true">Register</Link>
      </li>
    </ul>
    <div className="tab-pane" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
      <form onSubmit={handleSubmit} >
        <div className="form-floating mb-4">
          <input type="text" id="firstName" className="form-control" name='firstName' value={userDetails.firstName} 
          onChange={handleChange} placeholder='John' />
          <label htmlFor="firstName">First Name</label>
        </div>
        <div className="form-floating mb-4">
          <input type="text" id="lastName" className="form-control" name='lastName' value={userDetails.lastName} 
          onChange={handleChange}
          placeholder='Doe' />
          <label htmlFor="lastName">Last Name</label>
        </div>

        <div className="form-floating mb-4">
          <input type="text" id="registerUsername" className="form-control" name='userName' value={userDetails.userName} 
          onChange={handleChange}
          placeholder='John Doe' />
          <label htmlFor="registerUsername">Username</label>
        </div>

        <div className="form-floating mb-4">
          <input type="email" id="registerEmail" className="form-control" name='email' value={userDetails.email} 
          onChange={handleChange}
          placeholder="name@example.com"/>
          <label htmlFor="registerEmail">Email</label>
        </div>

        <div className="form-floating mb-4">
          <input type="password" id="registerPassword" className="form-control" name='password' value={userDetails.password}
          onChange={handleChange} placeholder='password'/>
          <label htmlFor="registerPassword">Password</label>
        </div>

        <div className="form-floating mb-4">
          <input type="password" id="registerRepeatPassword" className="form-control" name='confirmPassword' value={userDetails.confirmPassword} 
          onChange={handleChange}
          placeholder='repeat password' />
          <label htmlFor="registerRepeatPassword">Repeat password</label>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Registration
