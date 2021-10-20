import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Create Account</h2>
        <form>
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="p1" placeholder="Your Password" />
          <br />
          <input
            type="password"
            name=""
            id="p2"
            placeholder="Re-enter Password"
          />
          <br />
          <input type="submit" value="Sign Up" />
        </form>
        <p>
          Already have an account? <Link to="/login">Sign-In</Link>
        </p>
        <div>----------or-----------</div>
        <button className="btn-regular">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
