interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`btn ${variant === 'primary' ? 'btn-primary' : 'bg-gray-500 text-white hover:bg-gray-600'}`}
    >
      {children}
    </button>
  );
} 