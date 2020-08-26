import React, { useState } from 'react';

const Accordion = ({ items }) => {
  // UseState allows state to be access by a function component
  // state -> setState -> Inital value
  const [activeIndex, setActiveIndex] = useState(null);

  // Map through items
  const renderedItems = items.map((item, index) => {
    // Helper Function
    // Must wrap callback function in arrow function to invoke later
    const onTitleClick = (index) => {
      setActiveIndex(index);
    };

    return (
      // React.Fragment - group a list of children without
      // adding extra elements in the DOM
      <React.Fragment key={item.title}>
        <div className="title active" onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};

export default Accordion;
