// Dropdown.js
import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectAll = () => {
    if (checkedItems.length === options.length) {
      setCheckedItems([]);
    } else {
      setCheckedItems(options);
    }
  };

  const handleCheck = (option) => {
    if (checkedItems.includes(option)) {
      setCheckedItems(checkedItems.filter((item) => item !== option));
    } else {
      setCheckedItems([...checkedItems, option]);
    }
  };

  const isAllSelected = checkedItems.length === options.length;

  return (
    <div className="dropdown">
      <label className="dropdown-toggle">
        <input
          type="checkbox"
          checked={isAllSelected}
          onChange={handleSelectAll}
        />
        Select Options ({options.length})
      </label>
      <button onClick={toggleDropdown} className="dropdown-toggle-btn">
        &#9660;
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option}>
              <input
                type="checkbox"
                checked={checkedItems.includes(option)}
                onChange={() => handleCheck(option)}
              />
              <label>{option}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
