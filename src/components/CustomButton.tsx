import React, { useState, useEffect } from 'react';

interface CustomButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children, className = '', size = 'md' }) => {
  let paddingClass = 'px-4 py-2';
  if (size === 'sm') paddingClass = 'px-3 py-1.5 text-sm';
  if (size === 'lg') paddingClass = 'px-6 py-3 text-lg';
  if (size === 'xl') paddingClass = 'px-8 py-4 text-xl';

  return (
    <button
      onClick={onClick}
      className={`
        ${paddingClass}
        text-white font-medium rounded-lg
        bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl
        focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800
        transition-all duration-300 ease-in-out
        ${className}
      `}
    >
      {children}
    </button>
  );
};