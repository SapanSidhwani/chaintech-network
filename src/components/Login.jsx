import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    
    const navigate = useNavigate();
    const storedUserDetails = localStorage.getItem('userDetails');

    useEffect(() => {
        if (storedUserDetails === null) {
            navigate('/registration');
        }
    }, [storedUserDetails, navigate]);

    const { email: storedEmail, password: storedPassword } = JSON.parse(storedUserDetails || '{}');
    const [checkDetails, setCheckDetails] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCheckDetails((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if entered credentials match stored credentials
        if (storedEmail === checkDetails.email && storedPassword === checkDetails.password) {
            // If match, navigate to home page
            navigate('/');
        } else {
            // If not, reset input fields and navigate to login page
            setCheckDetails({ email: '', password: '' });
            navigate('/login');
        }
    };
    return (
        <div className='login-page rounded-4 border border-1 bg-body-tertiary mb-4'>
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li className="nav-item" role="presentation">
                <Link className="nav-link active" id="tab-login" data-mdb-toggle="pill" to="/login" role="tab"
                aria-controls="pills-login" aria-selected="true">Login</Link>
            </li>
            <li className="nav-item" role="presentation">
                <Link className="nav-link" id="tab-register" data-mdb-toggle="pill" to="/registration" role="tab"
                aria-controls="pills-register" aria-selected="false">Register</Link>
            </li>
            </ul>

            <div className="tab-content">
            <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                <form onSubmit={handleSubmit}>
                <div className="form-floating mb-4">
                    <input type="email" id="loginName" className="form-control" name="email" value={checkDetails.email} onChange={handleChange} placeholder='name@example.com' />
                    <label className="form-label" htmlFor="loginName">Email</label>
                </div>

                <div className="form-floating mb-4">
                    <input type="password" id="loginPassword" className="form-control" name="password" value={checkDetails.password} onChange={handleChange} placeholder='password'/>
                    <label className="form-label" htmlFor="loginPassword">Password</label>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                </div>
                <div className="text-center">
                    <p>Not a member? <Link to="/registration">Register</Link></p>
                </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Login
