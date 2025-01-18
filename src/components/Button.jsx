import PropTypes from "prop-types";

const Button = ({ children, value, onClick, className }) => {

  return (
    <button
      onClick={(e) => onClick && onClick({ ...e, target: { ...e.target, value } })}
      className={`${className} flex justify-center items-center rounded-[75px] h-20 bg-lime-100 active:bg-green-400 active:scale-75 transition ease-in duration-300`}
      value={value}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
