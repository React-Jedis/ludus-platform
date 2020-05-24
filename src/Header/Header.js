import React, { useContext } from 'react';
import { ReactComponent as Burger } from '../assets/bars-solid.svg';
import DrawerContext from '../context/DrawerContext';

const Header = ({ title }) => {
  const { setOpenDraw } = useContext(DrawerContext);
  return (
    <div className="flex items-center bg-blue-500 text-white min-h-35 pl-2">
      <Burger
        width="2.5rem"
        className="pb-1 pt-1 pl-2 pr-2 m-2 border rounded-md"
        onClick={() => setOpenDraw(true)}
      />
      <span className="ml-10">{title}</span>
    </div>
  );
};

export default Header;
