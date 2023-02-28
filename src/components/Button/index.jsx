const Button = ({ children, onClick, className, type, id }) => {
  return (
    <button type={type} className={className} id={id} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
