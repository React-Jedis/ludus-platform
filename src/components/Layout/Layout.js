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
      <div className="bg-corporative-8 h-full">
        <div className="p-4 text-gray-200">
          <span className="text-xl">Introduction</span>
          <p className="mt-5 p-5 rounded-md bg-corporative-5">
            CSS Grid Layout (aka “Grid”), is a two-dimensional grid-based layout
            system that aims to do nothing less than completely change the way
            we design grid-based user interfaces. CSS has always been used to
            lay out our web pages, but it’s never done a very good job of it.
            First, we used tables, then floats, positioning and inline-block,
            but all of these methods were essentially hacks and left out a lot
            of important functionality (vertical centering, for instance).
            Flexbox helped out, but it’s intended for simpler one-dimensional
            layouts, not complex two-dimensional ones (Flexbox and Grid actually
            work very well together). Grid is the very first CSS module created
            specifically to solve the layout problems we’ve all been hacking our
            way around for as long as we’ve been making websites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
