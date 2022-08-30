import React from 'react';
import SignUpForm from '../../components/AccountDetail/SignUpForm';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Header/Navigation';


const Register = () => {
  return (
    <div>
      <Navigation />
      <SignUpForm />
      <Footer />
    </div>
  );
};

export default Register;