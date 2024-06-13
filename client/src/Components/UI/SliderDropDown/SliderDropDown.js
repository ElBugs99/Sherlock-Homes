import React, { useState, useRef, useEffect } from 'react';
import './sliderDropDown.css';
import { addDotsToNumber } from '../../../utils/numberUtils';

export default function SliderDropDown({ min, max, callback, placeholder, background, color, width, innerWidth }) {
    const [isOpen, setIsOpen] = useState(false);
    const [values, setValues] = useState([min, max]);
    const sliderRef = useRef(null);
    const leftHandleRef = useRef(null);
    const rightHandleRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSliderChange = (index, newValue) => {
        const newValues = [...values];
        newValues[index] = Math.round(newValue);

        // Ensure values are within the valid range
        newValues[0] = Math.max(min, newValues[0]);
        newValues[1] = Math.min(max, newValues[1]);

        setValues(newValues);
        if (callback) callback(newValues);
    };

    const handleMouseMove = (e, index) => {
        if (!sliderRef.current) return;
        const rect = sliderRef.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const sliderWidth = rect.width;
        let newValue = min + (offsetX / sliderWidth) * (max - min);

        // Ensure newValue is within the range
        newValue = Math.max(min, Math.min(newValue, max));

        handleSliderChange(index, newValue);
    };

    const handleMouseDown = (index) => {
        const handleMouseUp = () => {
            document.removeEventListener('mousemove', mouseMoveListener);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        const mouseMoveListener = (e) => handleMouseMove(e, index);

        document.addEventListener('mousemove', mouseMoveListener);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleClickOutside = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (callback) callback(values);
    }, [values, callback]);

    return (
        <>
            {isOpen && <div className="overlay" onClick={handleClickOutside}></div>}
            <div className='slider-dropdown' style={{ width: width }}>
                <div
                    className={`slider-select ${isOpen ? 'slider-select-clicked' : ''}`}
                    style={{ backgroundColor: background, color: color, width: innerWidth }}
                    onClick={toggleDropdown}
                >
                    <span className='slider-selected'>
                        {
                            (values[0] || values[1]) && (values[0] !== min || values[1] !== max) ? 
                            addDotsToNumber(values[0]) + ' - ' + addDotsToNumber(values[1]) : placeholder
                        }
                    </span>
                    <div
                        className={`slider-caret ${isOpen ? 'slider-caret-rotate' : ''}`}
                        style={{ borderTop: `6px solid ${color}` }}
                    ></div>
                </div>
                {isOpen && (
                    <div className={`slider-drop-menu ${isOpen ? 'slider-menu-open' : ''}`} style={{ minWidth: '15em' }}>
                        <div
                            className="slider-range"
                            ref={sliderRef}
                            style={{
                                position: 'relative',
                                height: '10px',
                                background: '#ddd',
                                cursor: 'pointer'
                            }}
                        >
                            <div
                                ref={leftHandleRef}
                                style={{
                                    position: 'absolute',
                                    left: `${((values[0] - min) / (max - min)) * 100}%`,
                                    transform: 'translateX(-50%)',
                                    background: color,
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    cursor: 'grab'
                                }}
                                onMouseDown={() => handleMouseDown(0)}
                            ></div>
                            <div
                                ref={rightHandleRef}
                                style={{
                                    position: 'absolute',
                                    left: `${((values[1] - min) / (max - min)) * 100}%`,
                                    transform: 'translateX(-50%)',
                                    background: color,
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    cursor: 'grab'
                                }}
                                onMouseDown={() => handleMouseDown(1)}
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
                            <span>{ addDotsToNumber(values[0]) }</span>
                            <span>{ addDotsToNumber(values[1]) }</span>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
