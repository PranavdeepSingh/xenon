import React from 'react';
import RegistrationForm from '../../components/Contact/regform';

import Navigation from '../../components/Header/Navigation';

const Form = () => {
    return (
      <div>
        {/* Navigation*/}
        <Navigation />
        {/* Registration Form*/}
        <RegistrationForm />
       
      </div>
    );
  };
  
  export default Form;