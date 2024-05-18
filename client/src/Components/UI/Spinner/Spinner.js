import React from 'react'
import { Bars } from 'react-loader-spinner'

export default function Spinner() {
    return (
        <div>
            <Bars
                height="80"
                width="80"
                color="#38ba8c"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}
