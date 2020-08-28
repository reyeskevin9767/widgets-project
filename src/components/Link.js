import React from 'react';

// Display a archor element with event handler
// Create a Navigation Event Object to notify each route that url has changed
// Each route will look at url and determine if route needs to be rendered
const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    event.preventDefault();
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
