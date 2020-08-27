import React, { useState, useEffect, useRef } from 'react';

// Dropdown component can only set up event handlers easily
// on elements it creates
// Has difficultly with elements that it did not create
// Event bubbling -> Event handlers are invoked automatically
// as the it raise through the DOM structure

// Event Handlers Order -> body, item, dropdown

// useRef -> References a JSX element

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener('click', (event) => {
      
      // Checks to see to event.target is inside JSX element
      if (ref.current.contains(event.target)){
        return;
      };

      setOpen(false);
    });
  }, []);

  const renderedOptions = options.map((option) => {
    // Null -> Renders Nothing
    // Remove option from list
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        onClick={() => onSelectedChange(option)}
        className="item"
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
