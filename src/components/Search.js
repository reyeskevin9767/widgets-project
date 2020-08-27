import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dompurify from 'dompurify';

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDoucnedTerm] = useState(term);
  const [results, setResults] = useState([]);

  // useEffect - Allow function components to use
  // something like lifecycle methods
  // Hook runs code automatically in one of three scenarios:

  // 1. [] -> Run at initial render

  // 2. ..nothing -> Run at initial render and run after every rerender

  // 3. [data] -> Run at initial render and run after every rerender
  // if data has changed since last render

  // useEffect cannot use async and await directly

  // Debounce each input
  // When term is updated -> create timer -> return clearTimeout
  // When term is updated again -> return clearTimeout(cancels timer) -> create new timer
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDoucnedTerm(term);
    }, 500);

    // Run all useEffect -> then return arrow function on first render
    // Next render -> run arrow function -> run all useEffect -> return arrow function
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };

    // Request to api
    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm]);

  // Map through api results
  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span
            dangerouslySetInnerHTML={{
              __html: dompurify.sanitize(result.snippet),
            }}
          ></span>
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
