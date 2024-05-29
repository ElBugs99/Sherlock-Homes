import React from 'react';
import NavBar from '../UI/NavBar/NavBar';
import UserCard from '../UI/UserCard/UserCard';
import Footer from '../UI/Footer/Footer';
import { MdFavorite } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import Lottie from 'react-lottie';
import animationData from '../../assets/animation/Animation - chip.json';
import HouseAnimation from '../../assets/animation/Animation - House.json';
import './profilePage.css';

export default function ProfilePage() {


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const houseOptions = {
        loop: true,
        autoplay: true,
        animationData: HouseAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }

    };

   


    return (
        <div className='profile-page-container'>
            <NavBar searchHidden={true} />
            <div className='profile-page'>
                <div className='profile-page-left'>
                    <UserCard />
                    {/* <div className='profile-page-side-info-box info-box2'>
                        right
                    </div> */}
                </div>

                <div className='profile-page-center'>
                    <div className='profile-center-top'>
                        <div className='profile-info-box favorites'>
                            Favoritos <MdFavorite className='profile-icon' />
                        </div>
                        <div className='profile-info-box comments'>
                            Comentarios <FaComment className='profile-icon' />
                        </div>
                        <div className='profile-info-box publications'>
                            Publicaciones <FaHouse className='profile-icon' />
                        </div>
                    </div>
                    <div className='profile-center-info-box'>
                        <div className='profile-center-info-box-content'>
                            <div className='profile-center-lottie'>
                                <Lottie
                                    options={defaultOptions}
                                    isClickToPauseDisabled={true}
                                    height={200}
                                    width={200}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profile-page-right'>
                    
                    <div className='profile-page-side-info-box'>
                        <div className='house-animation-container'>
                        <Lottie
                        options={houseOptions}
                        isClickToPauseDisabled={true}
                        height={200}
                        width={250}
                        />
                          <p className='house-animation-text'>
                            Cientos de Familias han encontrado su hogar ideal gracias a Sherlock Homes.
                            ¿Que estas esperando?</p>
                        </div>
                        
                    </div>
                    <div className='profile-page-side-info-box info-box2'>
                        right2
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
