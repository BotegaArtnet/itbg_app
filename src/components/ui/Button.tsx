import { motion } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

const variants = {
  primary: 'bg-gray-900 text-white hover:bg-gray-800',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
  outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
};

export function Button({ 
  children, 
  className = '', 
  variant = 'primary',
  ...props 
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium
        shadow-sm transition-colors
        focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
} 