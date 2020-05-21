import React from 'react';
import { ReactComponent as Burger } from '../assets/bars-solid.svg';

const Header = () => (
  <div className="flex items-center w-full bg-blue-500 text-white">
    <Burger width="3rem" className="p-3" />
    <span className="flex-1 ml-10">CSS Grids Fundamentals</span>
  </div>
);

export default Header;
