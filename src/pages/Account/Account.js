import React from 'react';
import SignInForm from '../../components/AccountDetail/SignInForm';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Header/Navigation';


const Account = () => {
  return (
    <div>
      <Navigation />
      <SignInForm />
      <Footer />
    </div>
  );
};

export default Account;