import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Button({
  children,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'ghost', 'teal'
  size = 'md', // 'sm', 'md', 'lg'
  to,
  href,
  onClick,
  className = '',
  disabled = false,
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary: 'bg-[#6650a4] hover:bg-[#55418b] text-white shadow-sm hover:shadow-md focus:ring-[#6650a4] dark:bg-[#aa97e8] dark:hover:bg-[#9782db] dark:text-[#171717]',
    secondary: 'bg-[#ede8f8] hover:bg-[#e2daf3] text-[#6650a4] border border-[#d6cbe9] dark:bg-[#2c2443] dark:hover:bg-[#382e56] dark:text-[#aa97e8] dark:border-[#4c3f70]',
    teal: 'bg-[#258d8b] hover:bg-[#1d7573] text-white shadow-sm hover:shadow-md focus:ring-[#258d8b] dark:bg-[#69c5bd] dark:hover:bg-[#57b3ab] dark:text-[#171717]',
    outline: 'border border-[var(--border-color)] bg-transparent hover:bg-[var(--bg-subsurface)] text-[var(--text-primary)] focus:ring-[var(--accent-purple)]',
    ghost: 'bg-transparent hover:bg-[var(--bg-subsurface)] text-[var(--text-primary)]',
  };

  const buttonClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <Link to={to} className={buttonClasses} {...props}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
          {...props}
        >
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {content}
    </motion.button>
  );
}

export default Button;
