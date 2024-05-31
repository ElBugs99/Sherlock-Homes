import React, { useState, useEffect } from 'react';
import NavBar from '../UI/NavBar/NavBar';
import UserCard from '../UI/UserCard/UserCard';
import Footer from '../UI/Footer/Footer';
import { MdFavorite } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import Lottie from 'react-lottie';
import animationData from '../../assets/animation/Animation - chip.json';
import HouseAnimation from '../../assets/animation/Animation - House.json';
import {jwtDecode} from 'jwt-decode';
import './profilePage.css';

export default function ProfilePage() {
    const [user, setUser] = useState(null);
    const [comments, setComments] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [selectedSection, setSelectedSection] = useState(null);

    const token = localStorage.getItem('token');
    useEffect(() => {
        if (token) {
            const decodedToken = jwtDecode(token);
            setUser(decodedToken);
            fetchComments(decodedToken.id);
            fetchFavorites(decodedToken.id);
        }
    }, [token]);

    const fetchComments = async (userId) => {
        try {
            const response = await fetch(`http://localhost:3001/getCommentsByUser/${userId}`);
            const data = await response.json();
            if (data.success) {
                setComments(data.data);
                console.log('comentarios', data.data);
            } else {
                console.error('Failed to fetch comments:', data.message);
            }
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    const fetchFavorites = async (userId) => {
        try {
            const response = await fetch(`http://localhost:3001/favorites/${userId}`);
            const data = await response.json();
            if (data.success) {
                setFavorites(data.data);
                console.log('favoritos', data.data);
            } else {
                console.error('Failed to fetch favorites:', data.message);
            }
        } catch (error) {
            console.error('Error fetching favorites:', error);
        }
    };

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
                </div>
                <div className='profile-page-center'>
                    <div className='profile-center-top'>
                        <div className='profile-info-box favorites' onClick={() => setSelectedSection('favorites')}>
                            Favoritos <MdFavorite className='profile-icon' />
                        </div>
                        <div className='profile-info-box comments' onClick={() => setSelectedSection('comments')}>
                            Comentarios <FaComment className='profile-icon' />
                        </div>
                    </div>
                    <div className='profile-center-info-box'>
                        <div className='profile-center-info-box-content'>
                            {selectedSection === 'favorites' && favorites.length > 0 ? (
                                <div className='favorites-list'>
                                    {favorites.map(favorite => (
                                        <div key={favorite.favorite_id} className='favorite-item'>
                                            {favorite.property_id}
                                        </div>
                                    ))}
                                </div>
                            ) : selectedSection === 'comments' && comments.length > 0 ? (
                                <div className='comments-list-profile'>
                                    {comments.map(comment => (
                                        <div key={comment.comment_id} className='comment-item'>
                                            <p>{comment.content}</p>
                                            <span>{comment.date_created}</span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className='profile-center-lottie'>
                                    <Lottie
                                        options={defaultOptions}
                                        isClickToPauseDisabled={true}
                                        height={200}
                                        width={200}
                                    />
                                </div>
                            )}
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
                                ¿Que estas esperando?
                            </p>
                        </div>
                    </div>
                    <div className='profile-page-side-info-box info-box2'>
                        right2
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
