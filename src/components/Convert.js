import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    // Helper Function
    const doTranslation = async () => {
      const response = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: process.env.REACT_APP_GOOGLE_KEY,
          },
        }
      );
    };
  }, [language, text]);

  return <div></div>;
};

export default Convert;
