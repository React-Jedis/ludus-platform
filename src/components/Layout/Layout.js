import React from 'react';
import Drawer from '../Drawer';
import Header from '../Header';

const Layout = () => {
  return (
    <div className="flex-col h-screen text-white">
      <Drawer
        options={[
          'Introduction',
          'Basics and Browser Support',
          'Important Terminology',
          'The Most Powerful Lines in Grid',
          'Grid Properties Table of Contents'
        ]}
      />
      <Header title="CSS Grid Fundamentals" />
      <div className="bg-corporative-8 h-full">Hola</div>
    </div>
  );
};

export default Layout;
