// Dropdown.js
import React, { useState } from 'react';

const Dropdown = ({ data }) => {
  const [isOpen, setIsOpen] = useState({});
  const [checkedItems, setCheckedItems] = useState({});

  const toggleDropdown = (department) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [department]: !prevState[department],
    }));
  };

  const handleSelectAll = (department, subDepartments) => {
    const allSelected = subDepartments.every(
      (subDept) => checkedItems[department] && checkedItems[department].includes(subDept)
    );
    setCheckedItems((prevState) => ({
      ...prevState,
      [department]: allSelected ? [] : subDepartments,
    }));
  };

  const handleCheck = (department, subDepartment) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [department]: prevState[department] && prevState[department].includes(subDepartment)
        ? prevState[department].filter((item) => item !== subDepartment)
        : [...(prevState[department] || []), subDepartment],
    }));
  };

  return (
    <div>
      {data.map(({ department, sub_departments }) => {
        const allSelected = sub_departments.length > 0 && sub_departments.every(
          (subDept) => checkedItems[department] && checkedItems[department].includes(subDept)
        );
        return (
          <div key={department} className="dropdown">
            <label className="dropdown-toggle">
              <button onClick={() => toggleDropdown(department)} className="dropdown-toggle-btn">
                {isOpen[department] ? '-' : '-'}
              </button>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={() => handleSelectAll(department, sub_departments)}
              />
              {department} ({sub_departments.length})
            </label>


            {isOpen[department] && (
              <ul className="dropdown-menu">
                {sub_departments.map((subDept) => (
                  <li key={subDept}>
                    <input
                      type="checkbox"
                      checked={checkedItems[department] && checkedItems[department].includes(subDept)}
                      onChange={() => handleCheck(department, subDept)}
                    />
                    <label>{subDept}</label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Dropdown;
