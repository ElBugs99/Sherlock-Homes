import React from 'react'

import Lottie from 'react-lottie'
import LupaLoading from '../../../assets/animation/Animation - lupaloading.json';

export default function Spinner() {

    const LupaOptions = {
        loop: true,
        autoplay: true,
        animationData: LupaLoading,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }

    };
    return (
        <div>
            <Lottie
              options={LupaOptions}
              isClickToPauseDisabled={true}
              height={200}
              width={250}
              />
        </div>
    )
}
