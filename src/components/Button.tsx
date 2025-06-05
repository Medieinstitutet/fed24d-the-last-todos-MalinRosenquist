type ButtonProps = {
  children: React.ReactNode;
  className: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`px-5 py-2.5 border border-transparent rounded-lg text-white uppercase cursor-pointer font-semibold focus:outline-none transition-colors duration-250" focus:ring-3 focus:ring-blue-500 ${className}`}
      >
        {children}
      </button>
    </>
  );
};
