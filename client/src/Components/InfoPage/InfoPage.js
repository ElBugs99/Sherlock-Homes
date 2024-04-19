import React from 'react'
import './infoPage.css'
import houseKeys from '../../assets/images/houseKeys.jpg'

export default function InfoPage() {
    return (
        <div className='info-page'>

            <div className='info-page-row'>
                <p>Texto ejemplo</p>
                <img className='info-page-img' src={houseKeys} alt='keys' />
            </div>

            <div>
                InfoPage
            </div>

        </div>
    )
}
