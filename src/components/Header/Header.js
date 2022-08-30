import React from 'react';

// styled-component
import { StyledHeader, } from './Header.styled';

// Components
import Hero from './Hero';
import Navigation from './Navigation';

const Header = () => {
  return (
    <div>
      <StyledHeader>
        {/* Navigation */}
        <Navigation />
        {/* Hero Section */}
        <Hero />
      </StyledHeader>
    </div>
  );
};

export default Header;