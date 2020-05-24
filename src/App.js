import React, { useState } from 'react';
import Layout from './components/Layout';
import DrawerContext from './context/DrawerContext';

function App() {
  const [openDraw, setOpenDraw] = useState(false);
  return (
    <DrawerContext.Provider value={{ openDraw, setOpenDraw }}>
      <Layout />
    </DrawerContext.Provider>
  );
}

export default App;
