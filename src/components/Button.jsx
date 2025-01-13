import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "boxicons";

const Button = ({ type, onClick, className }) => {
  const [currentValue, setCurrentValue] = useState({
    value: "",
    children: <box-icon name="rocket"></box-icon>,
  });

  useEffect(() => {
    switch (type) {
      case "clear":
        break;
      case "add":
        setCurrentValue("+");
        break;
      case "multiply":
        setCurrentValue("*");
        break;
      case "substract":
        setCurrentValue("-");
        break;
      case "divide":
        setCurrentValue("/");
        break;
      case "equal":
        break;
      case "parenthesis":
        break;
      case "percentage":
        setCurrentValue("%");
        break;
      case "1":
        setCurrentValue("1");
        break;
      case "2":
        setCurrentValue("2");
        break;
      case "3":
        setCurrentValue("3");
        break;
      case "4":
        setCurrentValue("4");
        break;
      case "5":
        setCurrentValue("5");
        break;
      case "6":
        setCurrentValue("6");
        break;
      case "7":
        setCurrentValue("7");
        break;
      case "8":
        setCurrentValue("8");
        break;
      case "9":
        setCurrentValue("9");
        break;
      case "0":
        setCurrentValue("0");
        break;
      case "dot":
        setCurrentValue(".");
        break;
      case "backspace":
        break;
      default:
        break;
    }
  }, [type]);

  return (
    <button
      onClick={onClick}
      className={`${className} rounded-full h-20 bg-lime-100`}
      value={currentValue}
    >
      {currentValue}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
