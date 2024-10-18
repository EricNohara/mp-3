import { useState } from "react";

import {
  BtnRow,
  CalcBtnContainer,
  CalcOutputContainer,
  StyledCalculator,
} from "../components/styled/CalculatorStyledComponents";

export default function Calculator() {
  const [num1, setNum1] = useState<number | string>("");
  const [num2, setNum2] = useState<number | string>("");
  const [output, setOutput] = useState<string>("");

  const getError = (error: unknown) => {
    const err = error as Error;
    return err.message;
  };

  const getInputVals = () => {
    // check each input and make sure a value is inputted. If not, give the text a warning color and throw an error
    if (num1 === "" || num2 === "") throw new Error("Error: invalid input");

    setOutput("");

    return [Number(num1), Number(num2)];
  };

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const [n1, n2]: number[] = getInputVals();
      setOutput(n1 + n2 + "");
    } catch (err) {
      setOutput(getError(err));
    }
  };

  const handleSubtract = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const [n1, n2]: number[] = getInputVals();
      setOutput(n1 - n2 + "");
    } catch (err) {
      setOutput(getError(err));
    }
  };

  const handleMultiply = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const [n1, n2]: number[] = getInputVals();
      setOutput(n1 * n2 + "");
    } catch (err) {
      setOutput(getError(err));
    }
  };

  const handleDivide = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const [n1, n2]: number[] = getInputVals();
      setOutput(n1 / n2 + "");
    } catch (err) {
      setOutput(getError(err));
    }
  };

  const handlePower = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const [n1, n2]: number[] = getInputVals();
      let sol: number = 1; // initial value
      const exponent: number = Math.abs(n2); // absolute value here to take into account negative powers
      for (let i: number = 0; i < exponent; i++) {
        // iterate as many times as the exponent and multiply num1 by itself that many times to get the solution
        sol *= n1;
      }

      // if the exponent is negative, return the reciprocal, otherwise return it as is
      sol = n2 < 0 ? 1 / sol : sol;

      setOutput(sol + "");
    } catch (err) {
      setOutput(getError(err));
    }
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setNum1("");
    setNum2("");
    setOutput("");
  };

  return (
    <StyledCalculator>
      <input
        type="number"
        placeholder="Number 1"
        onChange={(e) => {
          setNum1(e.target.value);
        }}
        value={num1}
        required
      />
      <input
        type="number"
        placeholder="Number 2"
        onChange={(e) => setNum2(e.target.value)}
        value={num2}
        required
      />
      <CalcBtnContainer>
        <BtnRow>
          <button onClick={handleAdd}>
            <i className="fa-solid fa-plus"></i>
          </button>
          <button onClick={handleSubtract}>
            <i className="fa-solid fa-minus"></i>
          </button>
          <button onClick={handlePower}>
            <i className="fa-solid fa-superscript"></i>
          </button>
        </BtnRow>
        <BtnRow>
          <button onClick={handleDivide}>
            <i className="fa-solid fa-divide"></i>
          </button>
          <button onClick={handleMultiply}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <button onClick={handleClear}>
            <i className="fa-solid fa-delete-left"></i>
          </button>
        </BtnRow>
      </CalcBtnContainer>
      <CalcOutputContainer>
        <p>{output}</p>
      </CalcOutputContainer>
    </StyledCalculator>
  );
}
