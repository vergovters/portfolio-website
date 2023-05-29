import React from 'react';

interface StackProps {
  logo: string;
}

export const Stack: React.FC<StackProps> = ({ logo }) => {
  return <img className="h-[25px] mx-2" src={logo} alt="" />;
};