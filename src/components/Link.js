import React from 'react';

// Display a archor element with event handler
// Create a Navigation Event Object to notify each route that url has changed
// Each route will look at url and determine if route needs to be rendered
const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // Open in new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    // Update the url
    window.history.pushState({}, '', href);

    // Notify the routes, url has changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
