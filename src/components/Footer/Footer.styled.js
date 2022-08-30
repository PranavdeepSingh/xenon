import styled from 'styled-components';

export const StyledFooter = styled.div`
  padding: 10rem 0 5rem 0;
  overflow: hidden;
  background-color: #54BAB9;
  padding: 6rem 1rem;
  line-height: 3rem;
`

export const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 0 3rem;
`

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  color: #fff;

  @media (max-width: 998px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
`

export const FooterCenter = styled.div`
  span {
    margin-right: 1rem;
  }

  a:link, a:visited {
    display: block;
    color: #f1f1f1;
    font-size: 1.4rem;
    transition: 0.6s;
  }

  a:hover {
    color: #C4DFAA;
  }

  div {
    color: #f1f1f1;
    font-size: 1.4rem;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
`