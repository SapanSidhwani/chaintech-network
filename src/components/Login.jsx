import React from 'react'

const Login = () => {
  return (
        <div className='loginPage rounded-4 border border-1 bg-body-tertiary mb-4'>
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
            <li className="nav-item" role="presentation">
                <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                aria-controls="pills-login" aria-selected="true">Login</a>
            </li>
            <li className="nav-item" role="presentation">
                <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
                aria-controls="pills-register" aria-selected="false">Register</a>
            </li>
            </ul>

            <div className="tab-content">
            <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                <form>
                <div className="form-floating mb-4">
                    <input type="email" id="loginName" className="form-control" placeholder='name@example.com' />
                    <label className="form-label" htmlFor="loginName">Email</label>
                </div>

                <div className="form-floating mb-4">
                    <input type="password" id="loginPassword" className="form-control" placeholder='password'/>
                    <label className="form-label" htmlFor="loginPassword">Password</label>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                </div>
                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                </div>
                </form>
            </div>
            </div>
        </div>

  )
}

export default Login
