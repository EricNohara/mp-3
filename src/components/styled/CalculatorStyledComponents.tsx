import styled from "styled-components";

export const StyledCalculator = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 2.5%;
  background-color: black;
  padding: 5%;
  border-radius: 1rem;

  input {
    width: 100%;
    padding: 5%;
    font-size: 1.25rem;
    border-radius: 1rem;
    margin-bottom: 7%;
    font-family: inherit;
    background-color: var(--calc-input-color);
    border: none;
    color: white;
  }
`;

export const CalcBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-template-columns: repeat(3, 33%);
  grid-template-rows: repeat(2, 50%);
  justify-items: center;
  align-items: center;
`;

export const BtnRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7%;

  button {
    width: 25%;
    padding: 5%;
    font-size: 1.5rem;
    border-radius: 2rem;
    font-weight: bold;
    background-color: var(--calc-btn-color);
    color: white;
    border: none;
  }

  button:hover {
    cursor: pointer;
  }

  button:active {
    background-color: var(--calc-btn-color-active);
  }

  @media screen and (max-width: 750px) {
    button {
      font-size: 1rem;
    }
  }
`;

export const CalcOutputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--calc-input-color);
  border-radius: 1rem;

  p {
    padding: 6%;
    text-align: center;
  }
`;
