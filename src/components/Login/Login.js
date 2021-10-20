import React, { useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/';
  const { signInUsingGoogle } = useAuth();

  const handleGoogleSignIn = () => {
    signInUsingGoogle().then(result => {
      history.push(redirect_uri);
      console.log(result.user);
    });
  };
  return (
    <div className="login-form">
      <div>
        <h2>Sign-In</h2>
        <form>
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" placeholder="Password" />
          <br />
          <input type="submit" value="Sign In" />
        </form>
        <p>
          New to Ema-John? <Link to="/register">Create Account</Link>{' '}
        </p>
        <div>----------or-----------</div>
        <button className="btn-regular" onClick={handleGoogleSignIn}>
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
