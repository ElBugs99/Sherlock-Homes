import React, { useState, useEffect } from 'react';
import NavBar from '../UI/NavBar/NavBar';
import UserCard from '../UI/UserCard/UserCard';
import Footer from '../UI/Footer/Footer';
import { MdCompareArrows, MdFavorite } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import Lottie from 'react-lottie';
import CompareCarousel from '../UI/CompareCarousel/compareCarousel';
import animationData from '../../assets/animation/Animation - chip.json';
import HouseAnimation from '../../assets/animation/Animation - House.json';
import { jwtDecode } from 'jwt-decode';
import './profilePage.css';
import TableRow from '../UI/Table/TableRow';
import { addDotsToNumber } from '../../utils/numberUtils';
import Publicidad1 from '../../assets/videos/publicidad1.mp4';
import Fondo from '../../assets/images/Fondo.jpg';
import House from '../../assets/images/Ciudad.jpg';

export default function ProfilePage() {
    const [user, setUser] = useState(null);
    const [comments, setComments] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [selectedSection, setSelectedSection] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [checkedFavorites, setCheckedFavorites] = useState({});
    const [selectedCount, setSelectedCount] = useState(0);
    const [selectedFavorites, setSelectedFavorites] = useState([]);

    const token = localStorage.getItem('token');
    useEffect(() => {
        if (token) {
            const decodedToken = jwtDecode(token);
            setUser(decodedToken);
            fetchComments(decodedToken.id);
            fetchFavorites(decodedToken.id);
        }
    }, [token]);

    const openModal = () => {
        const selectedFavs = favorites.filter(favorite => checkedFavorites[favorite.property_id]);
        if (selectedFavs.length === 2) {
            setSelectedFavorites(selectedFavs);
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

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

    function truncateString(str, num) {
        if (str.length <= num) {
            return str;
        }
        return str.slice(0, num) + '...';
    }

    const handleCheckboxChange = (event, propertyId) => {
        const newCheckedFavorites = {
            ...checkedFavorites,
            [propertyId]: event.target.checked
        };
        setCheckedFavorites(newCheckedFavorites);

        const newSelectedCount = Object.values(newCheckedFavorites).filter(Boolean).length;
        setSelectedCount(newSelectedCount);
    };

    const handleDeleteFavorite = async (favoriteId) => {
        try {
            const response = await fetch('http://localhost:3001/deleteFavorite', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: user.id, propertyId: favoriteId }),
            });

            const data = await response.json();
            if (data.success) {
                setFavorites(favorites.filter(favorite => favorite.property_id !== favoriteId));
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error deleting favorite:', error);
        }
    };

    const commentsTitleRow = [
        'Id publicación',
        'Comentario',
        'Fecha',
        'Publicación'
    ];

    const commentsRows = comments.map(comment => ([
        comment.publication_id,
        truncateString(comment.content, 20),
        new Date(comment.date_created).toLocaleDateString(),
        <a className='profile-link' href={`/property/${comment.publication_id}`}>Ver publicación</a>
    ]));

    const favoritesTitleRow = [
        'Seleccionar',
        'Título',
        'Ciudad',
        'Tipo de propiedad',
        'Precio',
        'Enlace',
        'Eliminar'
    ];

    const favoritesRows = favorites.map(favorite => ([
        <div className='checkbox-container' key={`checkbox-${favorite.property_id}`}>
            <input
                className='checkbox-seleccionar-fav'
                type='checkbox'
                id={`checkbox-${favorite.property_id}`}
                checked={checkedFavorites[favorite.property_id] || false}
                onChange={(e) => handleCheckboxChange(e, favorite.property_id)}
            />
        </div>,
        truncateString(favorite.title, 20),
        favorite.city,
        favorite.property_type,
        `$ ${addDotsToNumber(favorite.price)}`,
        <a className='profile-link' href={`/Property/${favorite.property_id}`}>Ver propiedad</a>,
        <button className="delete-button" onClick={() => handleDeleteFavorite(favorite.property_id)}>X</button>
    ]));

    return (
        <div className='profile-page-container'>
            <NavBar searchHidden={true} />
            {user?.role === 'admin' && <div className='p-admin'>Bienvenido Administrador</div>}
            <div className='profile-page'>
                <div className='profile-page-left'>
                    <div className='profile-c-container'>
                        <UserCard />
                    </div>
                </div>
                <div className='profile-page-center'>
                    <div className='profile-center-top'>
                        <div className='profile-info-box favorites' onClick={() => setSelectedSection('favorites')}>
                            Favoritos <MdFavorite className='profile-icon' />
                        </div>
                        <div
                            className={`profile-info-box compare ${selectedCount !== 2 ? 'disabled' : ''}`}
                            onClick={openModal}
                            style={{ opacity: selectedCount !== 2 ? 0.5 : 1, pointerEvents: selectedCount !== 2 ? 'none' : 'auto' }}
                        >
                            Comparar <MdCompareArrows className='profile-icon' />
                        </div>
                        {isModalOpen && (
                            <div className="modal">
                                <div className="modal-content" style={{
                                    backgroundImage: `url(${Fondo})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                    backgroundBlendMode: 'overlay'
                                }}>
                                    <button className="close-button" onClick={closeModal}>&times;</button>
                                    <div className='text-comparar'>
                                        <h1 className='titulo-comparar'>COMPARAR PROPIEDADES</h1>
                                    </div>
                                    <br></br>
                                    <div className="image-container">
                                        {selectedFavorites.map((favorite, index) => (
                                            <div className="image-info" key={favorite.property_id}>
                                                <h2 className='opcion'>{`OPCIÓN ${index + 1}`}</h2>
                                                <div className='responsive-image'>
                                                    <CompareCarousel className='responsive-image' imageArray={favorite.media} />
                                                </div>
                                                <div className="info">
                                                    <div className='campos-propiedad'>
                                                        <h2 className='campo-nocomparar'>Nombre: </h2>
                                                        <p className='campo-comparar'>{favorite.title}</p>
                                                    </div>
                                                    <div className='campos-propiedad'>
                                                        <h2 className='campo-nocomparar'>Tipo Propiedad: </h2>
                                                        <p className='campo-comparar'>{favorite.property_type}</p>
                                                    </div>
                                                    <div className='campos-propiedad'>
                                                        <h2 className='campo-nocomparar'>Ciudad: </h2>
                                                        <p className='campo-comparar'>{favorite.city}</p>
                                                    </div>
                                                    <br />
                                                    <div className='campos-propiedad'>
                                                        <h2 className='campo-nocomparar'>Precio: </h2>
                                                        <p className='campo-comparar'>{`$ ${addDotsToNumber(favorite.price)}`}</p>
                                                    </div>
                                                    <div className='campos-propiedad'>
                                                        <h2 className='campo-nocomparar'>m2: </h2>
                                                        <p className='campo-comparar'>{favorite.sqft}</p>
                                                    </div>
                                                    <div className='campos-propiedad'>
                                                        <h2 className='campo-nocomparar'>N° Baños: </h2>
                                                        <p className='campo-comparar'>{favorite.bathrooms}</p>
                                                    </div>
                                                    <div className='campos-propiedad'>
                                                        <h2 className='campo-nocomparar'>N° Dormitorios: </h2>
                                                        <p className='campo-comparar'>{favorite.bedrooms}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className='profile-info-box comments' onClick={() => setSelectedSection('comments')}>
                            Comentarios <FaComment className='profile-icon' />
                        </div>
                    </div>
                    {selectedCount !== 2 && (
                        <p className="select-two-options-text">Seleccione solo 2 propiedades favoritas para compararlas</p>
                    )}
                    <div className='profile-center-info-box'>
                        <div className='profile-center-info-box-content'>
                            {selectedSection === 'favorites' && (
                                <div className='favorites-list'>
                                    <TableRow row={favoritesTitleRow} isTitle={true} />
                                    {favoritesRows.map((row, index) => (
                                        <TableRow key={index} row={row} />
                                    ))}
                                </div>
                            )}
                            {selectedSection === 'comments' && (
                                <div className='comments-list-profile'>
                                    <TableRow row={commentsTitleRow} isTitle={true} />
                                    {commentsRows.map((row, index) => (
                                        <TableRow key={index} row={row} />
                                    ))}
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
                                Cientos de familias han encontrado su hogar ideal gracias a Sherlock Homes. ¿Qué estás esperando?
                            </p>
                        </div>
                    </div>
                    <div className='profile-page-side-info-box info-box2'>
                        <div className='videoPublicidad1'>
                            <video className="publicidad1" autoPlay loop muted>
                                <source src={Publicidad1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
