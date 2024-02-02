import React from 'react'

const Registration = () => {
  return (
    <div className='registrationPage rounded-4 border border-1 bg-body-tertiary mb-4'>
    <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
      <li className="nav-item" role="presentation">
          <a className="nav-link" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
          aria-controls="pills-login" aria-selected="false">Login</a>
      </li>
      <li className="nav-item" role="presentation">
          <a className="nav-link active" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
          aria-controls="pills-register" aria-selected="true">Register</a>
      </li>
    </ul>
    <div className="tab-pane" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
      <form>
        <div className="form-floating mb-4">
          <input type="text" id="firstName" className="form-control" placeholder='John' />
          <label htmlFor="firstName">First Name</label>
        </div>
        <div className="form-floating mb-4">
          <input type="text" id="lastName" className="form-control" placeholder='Doe' />
          <label htmlFor="lastName">Last Name</label>
        </div>

        <div className="form-floating mb-4">
          <input type="text" id="registerUsername" className="form-control" placeholder='John Doe' />
          <label htmlFor="registerUsername">Username</label>
        </div>

        <div className="form-floating mb-4">
          <input type="email" id="registerEmail" className="form-control" placeholder="name@example.com"/>
          <label htmlFor="registerEmail">Email</label>
        </div>

        <div className="form-floating mb-4">
          <input type="password" id="registerPassword" className="form-control" placeholder='password'/>
          <label htmlFor="registerPassword">Password</label>
        </div>

        <div className="form-floating mb-4">
          <input type="password" id="registerRepeatPassword" className="form-control" placeholder='repeat password' />
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
