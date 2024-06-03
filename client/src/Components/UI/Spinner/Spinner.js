import React from 'react'
import Lottie from 'react-lottie'
/* import LupaLoading from '../../../assets/animation/Animation - dots.json'; */
import data from '../../../assets/animation/Animation - dots.json';

export default function Spinner() {

    /* const LupaOptions = {
        loop: true,
        autoplay: true,
        animationData: LupaLoading,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    };
     */

    const options = {
        loop: true,
        autoplay: true,
        animationData: data,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div>
            <Lottie
              options={options}
              isClickToPauseDisabled={true}
              height={200}
              width={250}
              />
        </div>
    )
}
