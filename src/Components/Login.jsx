import React, { useState } from 'react';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
import { FaRegCopyright } from 'react-icons/fa'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'user@gmail.com' && password === 'user123') {
      setMessage('Login successfully');
    } else {
      setMessage('Invalid email or password');
    }
  };

 

  return (
    <>
      <div className="register">
        <div className="left-div">
          <form onSubmit={handleLogin}>
            <h2 className="greet">Welcome Back 👋</h2>
            <p className="quote">
              Today is a new day. It's your day. You shape it. Sign in to start managing your projects.
            </p>

            <div className="authentication">
              <div className="email">
                <legend>Email</legend>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="email">
                <legend>Password</legend>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="forget-pwd">
              <a href="#">Forget Password?</a>
            </div>

            <button className="sign-in" type="submit">
              Sign In
            </button>

            <div className="either-sec">
              <p className="line"></p>
              <p className="or">Or</p>
              <p className="line1"></p>
            </div>

            <div className="authentication-1">
              <button className="google-signin">
                <span>
                  <FcGoogle />
                </span>{' '}
                Sign with Google
              </button>
              <button className="fb-signin">
                <span>
                  <SiFacebook className="fb-icon" />
                </span>{' '}
                Sign with Facebook
              </button>
              <div className='sign-up'>Don't you have account? <a href="/signup">Sign Up</a></div>
            </div>
            <div className="authentication-2">
              <button className="google-signin">
                <span>
                  <FcGoogle />
                </span>{' '}
                 Google
              </button>
              <button className="fb-signin">
                <span>
                  <SiFacebook className="fb-icon" />
                </span>{' '}
                Facebook
              </button>
              
            </div>
            <div className='sign-up-2'>Don't you have account? <a href="/signup">Sign Up</a></div>
            <div className="rights">
              <FaRegCopyright /> 2023 All RIGHTS RESERVED
            </div>

            {message && <p className={message === 'Login successfully' ? 'message1' : 'message'}>{message}</p>}
          </form>
        </div>
        <div className="right-div"></div>
      </div>
    </>
  );
};

export default LoginPage;
