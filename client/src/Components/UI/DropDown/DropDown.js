import React, { useState } from 'react';
import './dropdown.css';

export default function DropDown({ options, callback, placeholder }) {
    const [selected, setSelected] = useState(placeholder);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelected(option);
        setIsOpen(false);
    };


    return (
        <div className='dropdown'>
            <div className={`select ${isOpen ? 'select-clicked' : ''}`} onClick={toggleDropdown}>
                <span className='selected'>{selected}</span>
                <div className={`caret ${isOpen ? 'caret-rotate' : ''}`}></div>
            </div>
            <ul className={`drop-menu ${isOpen ? 'menu-open' : ''}`}>
                {options?.map((x, index) => (
                    <li key={index} className={x === selected ? 'active-option' : ''} onClick={() => handleOptionClick(x)}>
                        {x}
                    </li>
                ))}
            </ul>
        </div>
    );
}