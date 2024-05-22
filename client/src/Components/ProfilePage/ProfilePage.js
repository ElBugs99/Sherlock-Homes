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
