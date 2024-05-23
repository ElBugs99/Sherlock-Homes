import React from 'react';
import './profilePage.css';
import NavBar from '../UI/NavBar/NavBar';
import UserCard from '../UI/UserCard/UserCard';
import Footer from '../UI/Footer/Footer';

export default function ProfilePage() {
    return (
        <div className='profile-page-container'>
            <NavBar searchHidden={true} />
            <div className='profile-page'>
                <div className='profile-page-left'>
                    <UserCard />
                </div>
                <div className='profile-page-center'>
                    <div className='profile-center-top'>
                        <div className='profile-info-box'>
                            Favoritos
                        </div>
                        <div className='profile-info-box'>
                            Comentarios
                        </div>
                        <div className='profile-info-box'>
                            Publicaciones
                        </div>
                    </div>
                    center
                </div>
                <div className='profile-page-right'>
                    right
                </div>
            </div>
            <Footer />
        </div>
    )
}
