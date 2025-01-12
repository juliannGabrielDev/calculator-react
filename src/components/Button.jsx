export const Button = ({ children, onClick, className }) => {
  return(
    <button onClick={onClick} className={`${className} rounded-2xl bg-lime-100`}>
      {children}
    </button>
  );
};
