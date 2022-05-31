import styled from "styled-components";

const FormStyled = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  .register-form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 22rem;
  }

  label {
    width: 0;
    margin: 0;
    background-color: #f2f2f2;
  }
  .inputs-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  input {
    width: 12rem;
    height: 1.5rem;
    background-color: #f2f2f2;
    border: 0.05rem #c4c4c4 solid;
    border-radius: 0.25rem;
  }
  .submit-button {
    margin-top: 1rem;
    width: 10rem;
    height: 3rem;
    background-color: #1974b6;
    border: none;
    border-radius: 1.5rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
  }
`;

export default FormStyled;
