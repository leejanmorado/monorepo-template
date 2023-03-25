type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
	return (
		<div className='h-10'>
			<button
				className={`rounded-md bg-white px-4 py-2 text-base text-black transition-all hover:bg-gray-300 active:bg-gray-300 active:py-[6px] active:px-[14px] active:text-sm  ${className}`}
				onClick={onClick}
			>
				{children}
			</button>
		</div>
	);
};

export default Button;
