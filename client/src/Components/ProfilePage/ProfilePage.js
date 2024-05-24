import React from 'react';
import NavBar from '../UI/NavBar/NavBar';
import UserCard from '../UI/UserCard/UserCard';
import Footer from '../UI/Footer/Footer';
import { MdFavorite } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import './profilePage.css';

export default function ProfilePage() {
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
                        <div className='profile-info-box'>
                            Comentarios <FaComment  className='profile-icon' />
                        </div>
                        <div className='profile-info-box'>
                            Publicaciones <FaHouse className='profile-icon' />
                        </div>
                    </div>
                    <div className='profile-center-info-box'>
                        <div className='profile-center-info-box-content'>
                            center
                        </div>
                    </div>
                </div>
                <div className='profile-page-right'>
                    <div className='profile-page-side-info-box'>
                        right
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
