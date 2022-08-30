import styled from "styled-components";
import { Link as Scroll } from 'react-scroll'
import { Link } from "react-router-dom";

export const StyledNavigation = styled.div`
  height: 6rem;
  line-height: 6rem;
`

export const StyledNavCenter = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LinkLogo = styled(Link)`
  &:hover {
    transform: scale(1.1);
    transition: ease-in-out;
    color: #54BAB9;
  }

  &:active {
    transform: translate(5px, 10%);
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 585px) {
    font-size: 0.8rem;
  }

  @media (max-width: 540px) {
    font-size: 0.5rem;
  }

  @media (max-width: 400px) {
    font-size: 0.3rem;
  }
`

export const NavLink = styled(Link)`
  font-size: 2rem;
  padding: 1rem;

  &:hover {
    color: #54BAB9;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.5rem;
    margin-right: 0.2rem;
  }

  @media (max-width: 585px) {
    font-size: 1.2rem;
    padding: 0.5rem;
    margin-right: 0.2rem;
  }

  @media (max-width: 540px) {
    font-size: 1rem;
    padding: 0.5rem;
    margin-right: 0.2rem;
  }

  @media (max-width: 400px) {
    font-size: 0.8rem;
    padding: 0.4rem;
    margin-right: 0.1rem;
  }
`

export const StyledScroll = styled(Scroll)`
  &:hover {
    color: #54BAB9;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.5rem;
    margin-right: 0.2rem;
  }

  @media (max-width: 585px) {
    font-size: 1.2rem;
    padding: 0.5rem;
    margin-right: 0.2rem;
  }

  @media (max-width: 540px) {
    font-size: 1rem;
    padding: 0.5rem;
    margin-right: 0.2rem;
  }

  @media (max-width: 400px) {
    font-size: 0.8rem;
    padding: 0.4rem;
    margin-right: 0.1rem;
  }
`

export const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
`

export const StyledNavItem = styled.li`
  margin: 0 0 1rem 1rem;
  margin-right: 0.2rem;
  width: 100%;
  font-size: 2rem;
  font-weight: bold;

  &:hover {
    transform: scale(1.1);
    transition: ease-in-out;
  }

  &:active {
    transform: translate(5px, 10%);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 400px) {
    font-size: 0.6rem;
  }
`

export const StyledNavIcon = styled.li`
  display: flex;
  align-items: center;
`

export const StyledLinkIcon = styled(Link)`
  cursor: pointer;
  font-size: 2.5rem;
  font-weight: bold;
  padding: 0 1rem;
  color: #555;
  position: relative;
  margin-right: 0.5rem;

  i {
    font-weight: bold;
  }

  &:hover {
    transform: scale(1.1);
    transition: ease-in-out;
    color: #54BAB9;
  }

  &:active {
    transform: translate(5px, 10%);
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    font-weight: bold;
  }

  @media (max-width: 450px) {
    font-size: 0.9rem;
    font-weight: bold;
  }
`

export const SearchIcon = styled(Link)`
  i {
    &:hover {
      transform: scale(1.1);
      transition: ease-in-out;
      color: #54BAB9;
      font-weight: bold;
    }

    &:active {
      transform: translate(5px, 10%);
    }
  }
`

export const StyledDivIcon = styled.div`
  cursor: pointer;
  font-size: 2.5rem;
  padding: 0 1rem;
  color: #555;
  position: relative;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const StyledSpanIcon = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  top: 3px;
  right: -3px;
  background-color: #54BAB9;
  color: #fff;
  border-radius: 50%;
  font-size: 1.3rem;
  height: 2rem;
  width: 2rem;
  justify-content: center;
`