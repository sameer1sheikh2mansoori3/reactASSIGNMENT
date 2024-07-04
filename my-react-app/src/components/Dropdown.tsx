/* eslint-disable @typescript-eslint/no-explicit-any */
// Dropdown.js
import React, { useState } from 'react';
import './Dropdown.css'; // Import your CSS file

interface DropdownProps {
  data: { department: string; sub_departments: any[] }[];
}

const Dropdown: React.FC<DropdownProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: any[] }>({});

  const toggleDropdown = (department: string) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [department]: !prevState[department],
    }));
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const handleCheck = (department: string, subDepartment: any) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [department]: prevState[department]?.includes(subDepartment)
        ? prevState[department].filter((item) => item !== subDepartment)
        : [...(prevState[department] || []), subDepartment],
    }));
  };

  return (
    <div>
      {data.map(({ department, sub_departments }) => {
        return (
          <div key={department} className="dropdown">
            <label className="dropdown-toggle" onClick={() => toggleDropdown(department)}>
              {isOpen[department] ? '-' : '+'} {department} ({sub_departments.length})
            </label>

            {isOpen[department] && (
              <ul className="dropdown-menu">
                {sub_departments.map((subDept, index) => (
                  <li key={index}>
                    <input
                      type="checkbox"
                      checked={checkedItems[department]?.includes(subDept)}
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
