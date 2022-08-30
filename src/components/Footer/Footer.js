import React from 'react';

// Styled Components
import { StyledFooter, Container, FooterContainer, FooterCenter } from './Footer.styled';

const Footer = () => {
  return (
    <>
      <StyledFooter id='contact'>
        <Container>
          <FooterContainer>
            <FooterCenter>
              <h3>INFORMATION</h3>
              <a href="/##">About Us</a>
              <a href="/##">Privacy Policy</a>
              <a href="/##">Terms & Conditions</a>
              <a href="/##">Contact Us</a>
              <a href="/##">Site Map</a>
            </FooterCenter>
            <FooterCenter>
              <h3>MY ACCOUNT</h3>
              <a href="/##">My Account</a>
              <a href="/##">Order History</a>
              <a href="/##">Wish List</a>
              <a href="/##">Newsletter</a>
              <a href="/##">Returns</a>
            </FooterCenter>
            <FooterCenter>
              <h3>CONTACT US</h3>
             
              <div>
                <span>
                  <i className="far fa-envelope"></i>
                </span>
                @gmail.com
              </div>
              
              <div>
                <span>
                  <i className="far fa-paper-plane"></i>
                </span>
                Chandigarh
              </div>
            </FooterCenter>
          </FooterContainer>
        </Container>
      </StyledFooter>
    </>
  );
};

export default Footer;