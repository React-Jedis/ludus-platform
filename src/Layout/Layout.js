import React, { useContext } from 'react';
import Drawer from '@bit/dastag.ui-components.side-drawer';
import DrawerContext from '../context/DrawerContext';
import Header from '../Header';

const Layout = () => {
  const { openDraw, setOpenDraw } = useContext(DrawerContext);
  return (
    <div className="flex-col">
      <Drawer open={openDraw} onClick={() => setOpenDraw(false)} />
      <Header title="CSS Grid Fundamentals" />
      <main />
    </div>
  );
};

export default Layout;
