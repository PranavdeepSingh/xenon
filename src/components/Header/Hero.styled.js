import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHero = styled.div`
  height: calc(100vh - 7rem);
  background-color: #C4DFAA;
  overflow: hidden;
  position: relative;
  z-index: 0;

  @media (max-width: 768px) {
    height: calc(80vh - 7rem);
  }
`

export const HeroContent = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  height: 100%;
`
export const HeroContentLeft = styled.div`
  margin-top: -5rem;

  @media (max-width: 768px) {
    margin-top: -20rem;
  }

  @media (max-width: 567px) {
    margin-top: -20rem;
  }
`

export const HeroContentSubtitle = styled.span`
  display: inline-block;
  font-size: 1.4rem;
  margin-bottom: 1.6rem;
`

export const HeroContentTitle = styled.h1`
  line-height: 1.3;
  font-weight: 600;
  font-size: 4rem;
  text-align: left;

  @media (max-width: 996px) {
    font-size: 3rem;
  }
  @media (max-width: 567px) {
    margin-bottom: 1rem;
  }
`

export const HeroContentSpanColor = styled.span`
  color: #C21010;
`

export const HeroContentH5 = styled.h5`
  font-weight: 400;
  margin-top: 2rem;

  @media (max-width: 567px) {
    margin-top: 0.5rem;
  }
`
export const HeroContentRight = styled.img`
  position: absolute;
  bottom: 0;
  right: -5%;
  height: 100%;

  @media (max-width: 996px) {
    width: 90%;
  }

  @media (max-width: 567px) {
    width: 100%;
    height: 35rem;
    right: -20%;
  }
`

export const HeroButton = styled(Link)`
  display: inline-block;
  border-radius: 5rem;
  background-color: #C21010;
  padding: 1.3rem 5rem;
  color: #fff;
  font-weight: 600;
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.3);
  margin-top: 4rem;

  &:hover {
    transform: scale(1.1);
    transition: .5s ease-in-out;
    background-color: #fff;
    color: #C21010;
  }

  &:active {
    transform: translate(5px, 10%);
  }
  
  @media (max-width: 996px) {
    padding: 1.2rem 4rem;
  }
`