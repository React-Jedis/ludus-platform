import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import mdTest from '../../markdown/MDTEST.md';
import emoji from 'emoji-dictionary';
import Drawer from '../Drawer';
import Header from '../Header';

const Layout = () => {
  const [mdTestSource, setMdTestSource] = useState('');
  useEffect(() => {
    fetch(mdTest)
      .then((source) => source.text())
      .then((source) =>
        source.replace(/:\w+:/gi, (name) => emoji.getUnicode(name))
      )
      .then((source) => setMdTestSource(source));
  }, []);

  return (
    <div className="flex-col text-white">
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
      <div className="p-4 text-gray-200">
        <span className="text-xl">Introduction</span>
        <div className="mt-5 p-5 rounded-md bg-corporative-5">
          <ReactMarkdown source={mdTestSource} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
