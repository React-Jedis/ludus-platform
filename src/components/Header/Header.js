import React, { useContext } from 'react';
import { string } from 'prop-types';
import { ReactComponent as Burger } from '../../assets/bars-solid.svg';
import logo from '../../assets/LogoMakr.png';
import DrawerContext from '../../context/DrawerContext';

const Header = ({ title }) => {
  const { setOpenDraw } = useContext(DrawerContext);
  return (
    <div className="flex items-center justify-between bg-corporative-3 min-h-35 pl-2 pr-2">
      <Burger
        width="2.5rem"
        className="pb-1 pt-1 pl-2 pr-2 m-2 border rounded-md hover:bg-black hover:bg-opacity-25 hover:opacity-75 cursor-pointer"
        onClick={() => setOpenDraw(true)}
      />
      <span className="text-xl">{title}</span>
      <img src={logo} alt="Logo" width="40px" />
    </div>
  );
};

Header.propTypes = {
  title: string
};

Header.defaultProps = {
  title: ''
};

export default Header;
