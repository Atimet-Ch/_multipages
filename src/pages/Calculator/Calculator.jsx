// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

import React, { useState, useEffect } from 'react';
import './Calculator.css'; // นำเข้า CSS

const Calculator = () => {
    const [currentOperand, setCurrentOperand] = useState('0');
    const [previousOperand, setPreviousOperand] = useState('');
    const [operation, setOperation] = useState(undefined);
    const [shouldResetDisplay, setShouldResetDisplay] = useState(false);
    const [lastOperand, setLastOperand] = useState('');
    const [lastOperation, setLastOperation] = useState(undefined);

    const clearDisplay = () => {
        setCurrentOperand('0');
        setPreviousOperand('');
        setOperation(undefined);
        setLastOperand('');
        setLastOperation(undefined);
    };

    const clearEntry = () => {
        setCurrentOperand((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
    };

    const appendNumber = (number) => {
      if (number === '.' && currentOperand.includes('.')) {
          // ถ้าตัวเลขมีจุดอยู่แล้ว จะไม่อนุญาตให้ใส่เพิ่ม
          return;
      }
  
      if (currentOperand === '0' || shouldResetDisplay) {
          if (number === '.') {
              // ถ้ากด . ให้แสดงเป็น 0.
              setCurrentOperand('0.');
          } else {
              setCurrentOperand(number);
          }
          setShouldResetDisplay(false);
      } else {
          if (currentOperand.replace(/\s+/g, '').length < 9) {
              setCurrentOperand((prev) => prev.replace(/\s+/g, '') + number);
          }
      }
  };
  
  

    const chooseOperation = (op) => {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
            compute();
        }
        setOperation(op);
        setPreviousOperand(currentOperand);
        setCurrentOperand('0');
        setShouldResetDisplay(true);
    };

    const compute = () => {
        let computation;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand || previousOperand);
        if (isNaN(prev) || isNaN(current)) return;

        switch (operation || lastOperation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }

        setCurrentOperand(String(computation));
        setLastOperand(current);
        setLastOperation(operation);
        setOperation(undefined);
        setPreviousOperand('');
    };

    const updateDisplay = () => {
        return formatNumberWithSpaces(currentOperand);
    };

    const handleEqualsClick = () => {
        if (operation) {
            compute();
        } else if (lastOperation) {
            setPreviousOperand(currentOperand);
            setCurrentOperand(lastOperand);
            setOperation(lastOperation);
            compute();
        }
    };

    const handlePercentClick = () => {
        setCurrentOperand(String(parseFloat(currentOperand) / 100));
    };

    const formatNumberWithSpaces = (number) => {
        const numStr = number.toString().replace(/\s+/g, '');
        if (numStr.length > 9) return numStr.slice(0, 9);

        return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            const key = event.key;

            if (isFinite(key)) {
                appendNumber(key);
            } else if (key === '+') {
                chooseOperation('+');
            } else if (key === '-') {
                chooseOperation('-');
            } else if (key === '*') {
                chooseOperation('*');
            } else if (key === '/') {
                chooseOperation('÷');
            } else if (key === 'Enter') {
                event.preventDefault();
                handleEqualsClick();
            } else if (key === 'Escape') {
                clearDisplay();
            } else if (key === '%') {
                handlePercentClick();
            } else if (key === 'Backspace') {
                clearEntry();
            } else if (key === '.') {
                appendNumber('.');
            } else if (key === 'c' || key === 'C') {
                clearDisplay();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [currentOperand, previousOperand, operation]);
  
    return (
        <div className="calculator">
            <div className="display">{updateDisplay()}</div>
            <div className="buttons-Calculator">
                <button className="btns clear" onClick={clearDisplay}>AC</button>
                <button className="btns clear" onClick={clearEntry}>←</button>
                <button className="btns operator" onClick={handlePercentClick}>%</button>
                <button className="btns operator" onClick={() => chooseOperation('÷')}>÷</button>

                <button className="btns number" onClick={() => appendNumber('7')}>7</button>
                <button className="btns number" onClick={() => appendNumber('8')}>8</button>
                <button className="btns number" onClick={() => appendNumber('9')}>9</button>
                <button className="btns operator" onClick={() => chooseOperation('*')}>×</button>

                <button className="btns number" onClick={() => appendNumber('4')}>4</button>
                <button className="btns number" onClick={() => appendNumber('5')}>5</button>
                <button className="btns number" onClick={() => appendNumber('6')}>6</button>
                <button className="btns operator" onClick={() => chooseOperation('-')}>−</button>

                <button className="btns number" onClick={() => appendNumber('1')}>1</button>
                <button className="btns number" onClick={() => appendNumber('2')}>2</button>
                <button className="btns number" onClick={() => appendNumber('3')}>3</button>
                <button className="btns operator" onClick={() => chooseOperation('+')}>+</button>

                <button className="btns number zero" onClick={() => appendNumber('0')}>0</button>
                <button className="btns number" onClick={() => appendNumber('.')}>.</button>
                <button className="btns equals" onClick={handleEqualsClick}>=</button>
            </div>
        </div>
    );
};

export default Calculator;
