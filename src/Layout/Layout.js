import React, { useState } from 'react';
import Header from '../Header';
import Drawer from '../Drawer';

const Layout = () => {
  return (
    <div className="flex-col">
      <Drawer />
      <Header title="CSS Grid Fundamentals" />
      <main></main>
    </div>
  );
};

export default Layout;
