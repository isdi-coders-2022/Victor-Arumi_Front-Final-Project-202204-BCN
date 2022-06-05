import styled from "styled-components";

const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin-top: 1.5rem;

  .register-form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    width: 12rem;
    margin-bottom: 10px;
    background-color: #fff;
    text-align: left;
  }
  .inputs-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  input {
    width: 12rem;
    height: 1.5rem;
    margin-top: 4px;
    background-color: #f2f2f2;
    border: 0.05rem #c4c4c4 solid;
    border-radius: 0.25rem;
  }
  .submit-button {
    margin-top: 1rem;
    margin-bottom: 1rem;
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
