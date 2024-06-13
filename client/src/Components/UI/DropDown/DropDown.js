import React, { useState } from 'react';
import './dropdown.css';

export default function DropDown({ options, callback, placeholder, background, color, width, innerWidth }) {
    const [selected, setSelected] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelected(option);
        setIsOpen(false);
        if (callback) callback(option);
    };

    const handleClickOutside = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && <div className="overlay" onClick={handleClickOutside}></div>}
            <div
                className='dropdown'
                style={{
                    width: width,
                    zIndex: 2
                }}
            >
                <div
                    className={`select ${isOpen ? 'select-clicked' : ''}`}
                    style={{
                        backgroundColor: background,
                        color: color,
                        width: innerWidth
                    }}
                    onClick={toggleDropdown}
                >
                    <span className='selected'>{selected || placeholder}</span>
                    <div
                        className={`caret ${isOpen ? 'caret-rotate' : ''}`}
                        style={{
                            borderTop: `6px solid ${color}`
                        }}
                    ></div>
                </div>
                <ul className={`drop-menu ${isOpen ? 'menu-open' : ''}`}>
                    {options?.map((option, index) => (
                        <li
                            key={index}
                            className={option === selected ? 'active-option' : ''}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
