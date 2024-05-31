import React from 'react';
import './tableRow.css';

export default function TableRow({ row, isTitle }) {
  return (
    <div className={`table-row-container ${isTitle ? 'title-row' : ''}`}>
      {row.map((column, index) => (
        <div key={index} className='table-column'>
          {column}
        </div>
      ))}
    </div>
  );
}
