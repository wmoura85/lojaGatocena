const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-secondary focus:ring-primary',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white focus:ring-primary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 