import {useState, useRef} from 'react';
enum Operators {
  add,
  substraction,
  multiplication,
  divition,
}
export const useCalculator = () => {
  const [value, setValue] = useState('1500');
  const [oldVvalue, setOldVvalue] = useState('1500');
  const lastOperation = useRef<Operators>();

  const clean = () => {
    setValue('0');
    setOldVvalue('0');
  };
  const addTextNumber = (textNumber: string) => {
    //Not accepting double decimal point
    if (value.includes('.') && textNumber == '.') return;

    if (value.startsWith('0') || value.startsWith('-0')) {
      //is the first decimal point
      if (textNumber === '.') {
        setValue(value + textNumber);
        //Evaluate if its other 0 and there is a point
      } else if (textNumber === '0' && value.includes('.')) {
        setValue(value + textNumber);
        //evaluate if its diferent from 0 and there is no point
      } else if (textNumber !== '0' && !value.includes('.')) {
        setValue(textNumber);
        //avoid 0000.0....0
      } else if (textNumber === '0' && !value.includes('.')) {
        setValue(textNumber);
      } else {
        setValue(value + textNumber);
      }
    } else {
      setValue(value + textNumber);
    }
  };
  const positiveNegative = () => {
    if (value.includes('-')) {
      setValue(value.replace('-', ''));
    } else {
      setValue('-' + value);
    }
  };

  const deleteNumber = () => {
    let negVal = '';
    let tempNum = value;
    if (value.includes('-')) {
      negVal = '-';
      tempNum = value.substring(1);
    }
    if (tempNum.length > 1) {
      setValue(negVal + tempNum.slice(0, -1));
    } else {
      setValue('0');
    }
  };

  const changeNumByPrevious = () => {
    if (value.endsWith('.')) {
      setOldVvalue(value.slice(0, -1));
    } else {
      setOldVvalue(value);
    }
    setValue('0');
  };

  const btnDivition = () => {
    changeNumByPrevious();
    lastOperation.current = Operators.divition;
  };
  const btnMultiplication = () => {
    changeNumByPrevious();
    lastOperation.current = Operators.multiplication;
  };
  const btnAdd = () => {
    changeNumByPrevious();
    lastOperation.current = Operators.add;
  };
  const btnSubstraction = () => {
    changeNumByPrevious();
    lastOperation.current = Operators.substraction;
  };

  const calculate = () => {
    const num1 = Number(value);
    const num2 = Number(oldVvalue);
    setOldVvalue('0');
    switch (lastOperation.current) {
      case Operators.add:
        setValue(`${num1 + num2}`);
        break;
      case Operators.substraction:
        setValue(`${num1 - num2}`);

        break;
      case Operators.divition:
        setValue(`${num1 / num2}`);
        break;
      case Operators.multiplication:
        setValue(`${num1 * num2}`);
        break;
      default:
        clean();
    }
  };
  return {
    oldVvalue,
    value,
    clean,
    positiveNegative,
    deleteNumber,
    btnDivition,
    btnMultiplication,
    btnSubstraction,
    addTextNumber,
    btnAdd,
    calculate
  };
};
