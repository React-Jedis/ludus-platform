import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Content from '../Content';
import { lessons } from '../../db';
import Drawer from '../Drawer';
import Header from '../Header';

const Layout = () => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    setOptions(
      lessons.cssgrid.sections.map((lesson) => {
        return { title: lesson.title, link: lesson.page };
      })
    );
  }, []);

  return (
    <div className="flex-col text-white">
      <BrowserRouter>
        <Drawer options={options} />
        <Header title="CSS Grid Fundamentals" />
        <Route path="/:section" component={Content} />
      </BrowserRouter>
    </div>
  );
};

export default Layout;
