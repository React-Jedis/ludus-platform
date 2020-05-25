import React, { useContext } from 'react';
import SideDrawer from '@bit/dastag.ui-components.side-drawer';
import DrawerContext from '../../context/DrawerContext';

const Drawer = ({ options }) => {
  const { openDraw, setOpenDraw } = useContext(DrawerContext);
  return (
    <SideDrawer
      open={openDraw}
      onClick={() => setOpenDraw(false)}
      bgColor="#393e46"
    >
      {options.map((option) => (
        <div
          key={option}
          className="bg-corporative-3 mt-3 p-2 rounded-lg text-sm cursor-pointer hover:bg-corporative-2 hover:text-corporative-8"
        >
          {option}
        </div>
      ))}
    </SideDrawer>
  );
};

export default Drawer;
