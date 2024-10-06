import React from 'react';

interface AIIconProps {
  onClick: () => void;
}

const AIIcon: React.FC<AIIconProps> = ({ onClick }) => {
  return (
    <div 
      className="fixed bottom-5 right-5 cursor-pointer bg-white p-2 rounded-full shadow-lg" 
      onClick={onClick}
    >
      <img src="./Icons/icon.ico" alt="AI Icon" className="w-8 h-8" />
    </div>
  );
};

export default AIIcon;
