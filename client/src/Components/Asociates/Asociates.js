import React from 'react';
import Scroller from '../UI/Scroller/Scroller';
import Scroller2 from '../UI/Scroller/Scroller2';
import './asociates.css';

export default function Asociates() {
  return (
    <div className='asociates-container'>
        <div className='asociates'>
            <div className='asociates-left'>
                Todos nuestros asociados
            </div>
            <div className='asociates-right'>
                <Scroller />
                <Scroller2 />
            </div>
        </div>
    </div>
  )
}
