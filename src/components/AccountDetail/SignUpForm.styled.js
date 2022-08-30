import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 0 3rem;
`

export const LoginForm = styled.div`
  padding: 5rem 0;
  max-width: 50rem;
  margin: 5rem auto;

  form {
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 2rem;
      
      a {
        color: dodgerblue;
      }
    }

    label {
      margin-bottom: 1rem;
    }

    input {
      border: 1px solid #ccc;
      outline: none;
      padding: 1.5rem 0;
      text-indent: 1rem;
      font-size: 1.6rem;
      margin-bottom: 2rem;
      border-radius: 0.5rem;

      &:placeholder {
        font-size: 1.6rem;
        olor: #222;
      }
    }

    button {
      outline: none;
      border: none;
      font-size: 1.6rem;
      padding: 1rem 3rem;
      margin-right: 1.5rem;
      margin-top: 1rem;
      background-color: #54BAB9;
      color: white;
      cursor: pointer;
      border-radius: 4px;

      &:hover {
        color: #fff;
        background-color: grey;
      }

      &:active {
        color: #fff;
        background-color: #54BAB9;
      }
    }
  }
`