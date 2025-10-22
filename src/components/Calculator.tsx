import React, { useState } from 'react';
import styled from 'styled-components';

const CalculatorSection = styled.section`
  margin-top: 2rem;

  h2 {
    font-size: calc(1.4rem + 0.5vw);
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const CalculatorContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 1rem;
`;

const InputGroup = styled.div`
  margin-bottom: 0.5rem;

  label {
    display: block;
    margin-bottom: 0.25rem;
  }

  input {
    width: 100%;
    padding: 0.25rem;
    border: 1px solid #000;
  }
`;

const ButtonGroup = styled.div`
  margin: 1rem 0;

  button {
    margin: 0.25rem;
    padding: 0.5rem;
    border: 1px solid #000;
    background: #fff;
    cursor: pointer;
  }
`;

const Output = styled.div<{ $isNegative: boolean }>`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #000;

  h3 {
    margin-bottom: 0.25rem;
  }

  p {
    margin: 0;
    color: ${props => props.$isNegative ? 'red' : 'initial'};
  }
`;

const Calculator: React.FC = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const calculate = (operation: string) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('invalid input');
      return;
    }

    let calcResult: number | string = 0;
    switch (operation) {
      case '+':
        calcResult = a + b;
        break;
      case '-':
        calcResult = a - b;
        break;
      case '*':
        calcResult = a * b;
        break;
      case '/':
        if (b === 0) {
          setResult('Cannot divide by zero');
          return;
        }
        calcResult = a / b;
        break;
      case '**':
        let powResult = 1;
        for (let i = 0; i < Math.abs(b); i++) {
          powResult *= a;
        }
        calcResult = b >= 0 ? powResult : 1 / powResult;
        break;
    }
    setResult(calcResult.toString());
  };

  const clear = () => {
    setNum1('');
    setNum2('');
    setResult('');
  };

  return (
    <CalculatorSection>
      <h2>JavaScript Calculator</h2>
      <CalculatorContainer>
        <InputGroup>
          <label htmlFor="first-number">First Number:</label>
          <input
            type="tel"
            id="first-number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Enter first number"
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="second-number">Second Number:</label>
          <input
            type="tel"
            id="second-number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Enter second number"
          />
        </InputGroup>

        <ButtonGroup>
          <button onClick={() => calculate('+')}>+</button>
          <button onClick={() => calculate('-')}>-</button>
          <button onClick={() => calculate('*')}>*</button>
          <button onClick={() => calculate('/')}>/</button>
          <button onClick={() => calculate('**')}>**</button>
          <button onClick={clear}>Clear</button>
        </ButtonGroup>

        <Output $isNegative={parseFloat(result) < 0}>
          <h3>Result:</h3>
          <p>{result}</p>
        </Output>
      </CalculatorContainer>
    </CalculatorSection>
  );
};

export default Calculator;
