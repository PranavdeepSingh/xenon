import styled from 'styled-components';

export const StyledSectionCategory = styled.section`
  padding: 10rem 0 5rem 0;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 5rem 0;
  }
`
export const CatCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 114rem;
  margin: auto;
  padding: 0 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 3rem;
  }
`

export const Category = styled.div`
  max-width: 37rem;
  height: 25rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  text-align: center;
  margin-right: 3rem;

  @media (max-width: 967px) {
    max-width: 25rem;
    height: 20rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    height: 30rem;
    margin-right: 0rem;
    margin-bottom: 5rem;
  }
`
export const CatImg = styled.img`
  width: 36.5rem;
  height: 100%;
  margin: auto;
  object-fit: cover;
  transition: all 2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1200px) {
    width: 30rem;
  }

  @media (max-width: 967px) {
    width: 25rem;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const CatDiv = styled.div`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--white);
  width: 18rem;
  height: 5rem;
  line-height: 5rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
`
