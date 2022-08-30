import React from 'react';

// Styled Components
import { StyledBanner, BannerLeft, BannerRight, BannerTrend, BannerRightImg, SpanColor, BannerButton } from './Promotion.styled';

const Promotion = () => {
  return (
    <>
      <StyledBanner>
        <BannerLeft>
          <BannerTrend>Trend Design</BannerTrend>
          <h1>New Collection 2022</h1>
          <p>New Arrival <SpanColor>Sale 50% OFF</SpanColor> Limited Time Offer</p>
          <BannerButton to="">Discover Now</BannerButton>
        </BannerLeft>
        <BannerRight>
          <BannerRightImg src={require("../../assets/images/banner2.png")} alt="" />
        </BannerRight>
      </StyledBanner>
    </>
  );
};

export default Promotion;