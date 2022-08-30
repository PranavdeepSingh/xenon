import React, { useState, useEffect } from 'react';
import {
  auth,
  registerWithEmailAndPassword
} from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Styled Components
import { StyledContainer, LoginForm } from './SignUpForm.styled';

const SignUpForm = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const [userRegister, setUserRegister] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
      await registerWithEmailAndPassword(
        userRegister.name,
        userRegister.email,
        userRegister.password
      );
      alert('User created successfully');
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
            <h1>Register</h1>

            <label htmlFor="displayName">Name</label>
            <input 
              type="text" 
              placeholder="Enter Display Name" 
              name="displayName"
              onChange={e => setUserRegister({...userRegister, name: e.target.value })}
              required 
            />

            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              placeholder="Enter Email" 
              name="email"
              onChange={e => setUserRegister({...userRegister, email: e.target.value })}
              required 
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={e => setUserRegister({...userRegister, password: e.target.value })}
              required
            />

            <p>
              Already have account?
              <Link to="/login"> Sign In</Link>.
            </p>
            <div>
              <button 
                type="submit" 
                onClick={(e) => handleSubmit(e)}
              >
              Sign Up
              </button>
            </div>
          </form>
        </LoginForm>
      </StyledContainer>
    </>
  );
};

export default SignUpForm;