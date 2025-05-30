import React, { useState, useEffect } from 'react';

interface CustomCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const CustomCard: React.FC<CustomCardProps> = ({ children, className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        bg-gray-800 border border-gray-700 rounded-lg shadow-md p-6
        hover:border-blue-500 transition-all duration-300 ease-in-out
        transform hover:-translate-y-1 hover:shadow-xl
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
