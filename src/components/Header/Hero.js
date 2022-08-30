import React from 'react';

// Styled Components
import { StyledHero, HeroContent, HeroContentLeft, HeroContentSubtitle, HeroContentTitle, HeroContentSpanColor, HeroContentH5, HeroContentRight, HeroButton } from './Hero.styled';

const Hero = () => {
  return (
    <>
      <StyledHero>
        <HeroContent>
          <HeroContentLeft>
            <HeroContentSubtitle>GET YOUR SPRING COLLECTION</HeroContentSubtitle>
            <HeroContentTitle>
              Up to
              <HeroContentSpanColor> 90% <br />
                Discount </HeroContentSpanColor>
              on This <br />
              Independence Month
            </HeroContentTitle>
            <HeroContentH5>From 11th August to 31st August</HeroContentH5>
            <HeroButton to="">SHOP NOW</HeroButton>
          </HeroContentLeft>
          <div>
            <HeroContentRight src={require("../../assets/images/banner.png")} alt="" />
          </div>
        </HeroContent>
      </StyledHero>
    </>
  );
};

export default Hero;