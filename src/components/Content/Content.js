import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { lessons } from '../../db';
import emoji from 'emoji-dictionary';
const Content = ({ match }) => {
  const [mdSource, setMdSource] = useState('');

  useEffect(() => {
    const section = lessons.cssgrid.sections.find(
      (section) => section.page === `/${match.params.section}`
    );
    const thefile = require(`../../markdown/${section.file}`);
    fetch(thefile)
      .then((source) => source.text())
      .then((source) =>
        source.replace(/:\w+:/gi, (name) => emoji.getUnicode(name))
      )
      .then((source) => setMdSource(source));
  }, [match.params.section]);

  return (
    <div className="p-4 text-gray-200">
      <div className="mt-5 p-5 rounded-md bg-corporative-5">
        <ReactMarkdown source={mdSource} />
      </div>
    </div>
  );
};

export default Content;
