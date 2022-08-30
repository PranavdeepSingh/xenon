import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledBanner = styled.section`
  position: relative;
  background-color: #C4DFAA;
  padding: 14rem 20%;

  p {
    display: block;
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 5.4rem;
    color: #222;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 1500px) {
    padding: 14rem;
  }

  @media (max-width: 996px) {
    padding: 8rem 2rem;

    p {
      font-size: 1.5rem;
    }

    h1 {
      font-size: 4rem;
    }
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    height: 80vh;
  }

  @media (max-width: 567px) {
    padding: 8rem 5rem;

    p {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
  }
`

export const BannerLeft = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 3rem;
  }
`

export const BannerRight = styled.div`
  @media (max-width: 768px) {
    flex: 0 0 50%;
  }
`

export const BannerRightImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 5%;
  width: 75rem;

  @media (max-width: 1500px) {
    right: 3rem;
    width: 70rem;
  }

  @media (max-width: 996px) {
    right: -6%;
    width: 50rem;
  }

  @media (max-width: 768px) {
    right: 0;
    width: 50rem;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 567px) {
    width: 45rem;
  }
`
export const BannerTrend = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 1.5rem;

  @media (max-width: 996px) {
    font-size: 1.5rem;
  }

  @media (max-width: 567px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`

export const SpanColor = styled.span`
  color: #C21010;
`

export const BannerButton = styled(Link)`
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
  
  @media (max-width: 567px) {
    padding: 0.8rem 1.7rem;
    font-size: 1.4rem;
  }
`