import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');

  // useEffect - Allow function components to use
  // something like lifecycle methods
  // Hook runs code automatically in one of three scenarios:

  // 1. [] -> Run at initial render

  // 2. ..nothing -> Run at initial render and run after every rerender

  // 3. [data] -> Run at initial render and run after every rerender
  // if data has changed since last render

  // useEffect cannot use async and await directly
  useEffect(() => {
    const search = async () => {
      await axios.get('adsfadf')
    }

    search();
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
