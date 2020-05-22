import React from 'react';

const Header = ({ title }) => {
  return (
    <div className="flex items-center justify-center bg-blue-500 text-white min-h-35">
      <span>{title}</span>
    </div>
  );
};

export default Header;
