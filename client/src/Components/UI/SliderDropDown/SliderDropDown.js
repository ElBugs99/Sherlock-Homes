import React, { useState } from 'react';
import './sliderDropdown.css';

export default function SliderDropDown({ min, max, callback, placeholder, background, color, width, innerWidth }) {
    const [isOpen, setIsOpen] = useState(false);
    const [values, setValues] = useState([min, max]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSliderChange = (e) => {
        const [minValue, maxValue] = e.target.value.split(',').map(Number);
        setValues([minValue, maxValue]);
        if (callback) callback([minValue, maxValue]);
    };

    return (
        <div className='dropdown' style={{ width: width }}>
            <div
                className={`select ${isOpen ? 'select-clicked' : ''}`}
                style={{ backgroundColor: background, color: color, width: innerWidth }}
                onClick={toggleDropdown}
            >
                <span className='selected'>{placeholder}</span>
                <div
                    className={`caret ${isOpen ? 'caret-rotate' : ''}`}
                    style={{ borderTop: `6px solid ${color}` }}
                ></div>
            </div>
            <div className={`drop-menu ${isOpen ? 'menu-open' : ''}`}>
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={values.join(',')}
                    onChange={handleSliderChange}
                    className="slider"
                    multiple
                />
                <div className="slider-values">
                    <span>{values[0]}</span>
                    <span>{values[1]}</span>
                </div>
            </div>
        </div>
    );
}
