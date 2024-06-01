// HorizontalScroller.js
import React, { useEffect, useState, useRef } from 'react';
import './HorizontalScroller.css';

const HorizontalScroller = ({ children, speed = 1 }) => {
  const [translateX, setTranslateX] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const contentWidth = contentRef.current.scrollWidth / 2;
    const interval = setInterval(() => {
      setTranslateX((prev) => {
        const newTranslateX = prev - speed;
        if (Math.abs(newTranslateX) >= contentWidth) {
          return 0;
        }
        return newTranslateX;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [speed]);

  const style = {
    transform: `translateX(${translateX}px)`,
    whiteSpace: 'nowrap',
    display: 'flex',
  };

  return (
    <div className="horizontal-scroller">
      <div className="horizontal-scroller-content" ref={contentRef} style={style}>
        {children}
        {/* Duplicate children */}
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroller;
