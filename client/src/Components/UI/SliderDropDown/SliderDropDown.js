import React, { useState, useRef } from 'react';
import './sliderDropDown.css';
import { addDotsToNumber } from '../../../utils/numberUtils';

export default function SliderDropDown({ min, max, callback, placeholder, background, color, width, innerWidth }) {
    const [isOpen, setIsOpen] = useState(false);
    const [values, setValues] = useState([min, max]);
    const sliderRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSliderChange = (e) => {
        const rect = sliderRef.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const sliderWidth = rect.width;
        const newValue = min + (offsetX / sliderWidth) * (max - min);
        const newValues = [...values];
        
        if (Math.abs(newValue - values[0]) < Math.abs(newValue - values[1])) {
            newValues[0] = Math.round(newValue);
        } else {
            newValues[1] = Math.round(newValue);
        }

        // Ensure values are within the valid range
        newValues[0] = Math.max(min, newValues[0]);
        newValues[1] = Math.min(max, newValues[1]);

        setValues(newValues);
        if (callback) callback(newValues);
    };

    return (
        <div className='slider-dropdown' style={{ width: width }}>
            <div
                className={`slider-select ${isOpen ? 'slider-select-clicked' : ''}`}
                style={{ backgroundColor: background, color: color, width: innerWidth }}
                onClick={toggleDropdown}
            >
                <span className='slider-selected'>{placeholder}</span>
                <div
                    className={`slider-caret ${isOpen ? 'slider-caret-rotate' : ''}`}
                    style={{ borderTop: `6px solid ${color}` }}
                ></div>
            </div>
            {isOpen && (
                <div className={`slider-drop-menu ${isOpen ? 'slider-menu-open' : ''}`}>
                    <div
                        className="slider-range"
                        ref={sliderRef}
                        onClick={handleSliderChange}
                        style={{
                            position: 'relative',
                            height: '10px',
                            background: '#ddd',
                            cursor: 'pointer'
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                left: `${((values[0] - min) / (max - min)) * 100}%`,
                                transform: 'translateX(-50%)',
                                background: color,
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%'
                            }}
                        ></div>
                        <div
                            style={{
                                position: 'absolute',
                                left: `${((values[1] - min) / (max - min)) * 100}%`,
                                transform: 'translateX(-50%)',
                                background: color,
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%'
                            }}
                        ></div>
                        <div
                            style={{
                                position: 'absolute',
                                left: `${((values[0] - min) / (max - min)) * 100}%`,
                                width: `${((values[1] - values[0]) / (max - min)) * 100}%`,
                                height: '10px',
                                background: color,
                                zIndex: -1
                            }}
                        ></div>
                    </div>
                    <div className="slider-values">
                        <span>{addDotsToNumber(values[0])}</span>
                        <span>{addDotsToNumber(values[1])}</span>
                    </div>
                </div>
            )}
        </div>
    );
}
