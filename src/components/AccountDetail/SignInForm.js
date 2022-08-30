import React, { useState, useEffect } from 'react';
import {
  auth,
  loginWithEmailAndPassword,
} from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Styled Components
import { StyledContainer, LoginForm } from './SignUpForm.styled';

const SignInForm = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginWithEmailAndPassword(userLogin.email, userLogin.password);
    
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate('/');
    if (error) alert(error);
  }, [loading, user, error, navigate]);
  return (
    <>
      <StyledContainer>
        <LoginForm>
          <form action="">
            <h1>Login</h1>

            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              placeholder="Enter Email" 
              name="email"
              onChange={e => setUserLogin({...userLogin, email: e.target.value })}
              required   
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={e => setUserLogin({...userLogin, password: e.target.value })}
              required
            />
            <p>
              New Here?
              <Link to="/register"> Sign Up</Link>
            </p>

            <div>
              <button 
                type="submit" 
                onClick={e => handleSubmit(e)}
              >Login
              </button>
            </div>
          </form>
        </LoginForm>
      </StyledContainer>
    </>
  );
};

export default SignInForm;