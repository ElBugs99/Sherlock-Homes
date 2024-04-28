import React from 'react'
import './infoPage.css'
import houseKeys from '../../assets/images/houseKeys.jpg'
import NavBar from '../UI/NavBar/NavBar'

export default function InfoPage() {
    return (
        <div className='info-page'>

            <NavBar searchHidden={true}/>

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
