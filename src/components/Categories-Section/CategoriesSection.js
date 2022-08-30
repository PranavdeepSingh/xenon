import React from 'react';

// Styled Components
import { StyledSectionCategory, CatCenter, Category, CatImg, CatDiv } from './CategoriesSection.styled';

const CategoriesSection = () => {
  return (
    <>
      <StyledSectionCategory>
        <CatCenter>
          <Category>
            <CatImg src={require("../../assets/images/cat3.jpg")} alt="" />
            <CatDiv>
              <p>WOMEN'S WEAR</p>
            </CatDiv>
          </Category>
          <Category>
            <CatImg src={require("../../assets/images/cat2.jpg")} alt="" />
            <CatDiv>
              <p>ACCESSORIES</p>
            </CatDiv>
          </Category>
          <Category>
            <CatImg src={require("../../assets/images/cat1.jpg")} alt="" />
            <CatDiv>
              <p>MEN'S WEAR</p>
            </CatDiv>
          </Category>
        </CatCenter>
      </StyledSectionCategory>
    </>
  );
};

export default CategoriesSection;