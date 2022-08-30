import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  padding: 10rem 0 5rem 0;
  overflow: hidden;
`
export const NewArrivalTitle = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`
export const NewArrivalH1 = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-weight: 500;
`

export const ProductCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 567px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`

export const ProductItem = styled.div`
  position: relative;
  width: 27rem;
  margin: 0 auto;
  margin-bottom: 3rem;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 567px) {
    width: 40%;
    margin-bottom: 3rem;
    margin-right: 2rem;
  }
`

export const ProductOverlay = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  width: 100%;

  span {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background-color: #54BAB9;
    padding: 0.5rem 1rem;
    color: #fff;
    border-radius: 2rem;
    font-size: 1.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    visibility: hidden;
    opacity: 0;
    transition: 300ms ease-out;
  }

  &:hover {
    &::after {
      visibility: visible;
      opacity: 1;
    }
  }
`

export const ProductThumbImg = styled.img`
  width: 100%;
  height: 31rem;
  object-fit: cover;
  transition: all 500ms linear;
`

export const ProductInfo = styled.div`
  padding: 1rem;
  text-align: center;

  span {
    display: inline-block;
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 1rem;
  }
`
export const ProductInfoLink = styled(Link)`
  font-size: 1.5rem;
  display: block;
  margin-bottom: 1rem;
  transition: all 300ms ease;

  &:hover {
    color: #54BAB9;
  }
`

export const ProductIcon = styled.ul`
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;

  &:hover {
    a {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }

    a:not(:last-child) {
      margin-right: 0.5rem;
    }

    a:hover {
      background-color: #54BAB9;
      color: #fff;
    }
  }
`

export const ProductToCartLink = styled(Link)`
  background-color: #fff;
  text-align: center;
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: 300ms ease-out;
  transform: translateY(20px);
  visibility: hidden;
  opacity: 0;

  &:first-child {
    transition-delay: 0.1s;
  }

  @media (max-width: 567px) {
    padding: 0.5rem 1rem;
    font-size: 1.8rem;
  }
`


