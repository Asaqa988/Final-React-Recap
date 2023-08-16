import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/SigninPage.css'

const SignInPage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-xs-12 col-md-6">
          <h2 className="text-center">Sign In</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
