import React, { useState } from 'react';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { FaRegCircle } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
import './compareCarousel.css';

export default function CompareCarousel({ imageArray, height }) {

    const [imageIndex, setImageIndex] = useState(0);

    const prevImage = () => {
        setImageIndex(index => {
            if (index === 0) return imageArray.length - 1;
            return index - 1;
        })
    }

    const nextImage = () => {
        setImageIndex(index => {
            if (index === imageArray.length - 1) return 0;
            return index + 1;
        })
    }

    return (
        <div className='img-carousel-container'>

            <div className='img-array' style={{ height: height }}>
                {imageArray.map(url => (
                    <img key={url} src={url} alt='propiedad' className='slider-img' style={{
                        translate: ` ${-100 * imageIndex}% `
                    }} />
                ))}
            </div>

            <div className='img-carousel'>

                <button onClick={prevImage} className='img-slider-btn' style={{ left: 0 }}>
                    <GrPrevious />
                </button>
                <button onClick={nextImage} className='img-slider-btn' style={{ right: 0 }}>
                    <GrNext />
                </button>
            </div>


            <div className='slider-btns'>
                {imageArray.map((url, index) => (
                    <button key={index} className='dot-btn' onClick={() => setImageIndex(index)}>
                        {index === imageIndex ? <FaCircle /> : <FaRegCircle />}
                    </button>
                ))}
            </div>


        </div>
    )
}