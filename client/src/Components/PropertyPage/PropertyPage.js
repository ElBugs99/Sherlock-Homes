import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { PiToiletLight } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";
import { TbMeterSquare } from "react-icons/tb";
import { TiLocation } from "react-icons/ti";
import { addDotsToNumber } from "../../utils/numberUtils"
import ImageCarousel from '../UI/ImageCarousel/ImageCarousel';
import NavBar from '../UI/NavBar/NavBar';
import Footer from '../UI/Footer/Footer';
import './propertyPage.css';
import Spinner from '../UI/Spinner/Spinner';
import Calculator from '../UI/Calculator/Calculator';
import Map from '../UI/Map/Map';
import { FaLink } from "react-icons/fa6";
import CommentSection from '../UI/CommentSection/CommentSection';
import Graficos from '../UI/Graffics/Graficos';

import Tasacion from '../UI/Tasacion/Tasacion';


import GraficoIpv from '../UI/GraficoIPV/GraficoIPV';


export default function PropertyPage() {


    const [cityAvgPrices, setCityAvgPrices] = useState()

    const fetchAvgPrice = async () =>{

      try{
        const avgPricesResponse = await fetch('http://localhost:3001/avg');
        const avgPrices = await avgPricesResponse.json();
        setCityAvgPrices(prevPrices => ({
          ...prevPrices,
          vina: Math.round(parseFloat(avgPrices.viña) / 1000000),
          quilpue: Math.round(parseFloat(avgPrices.quilpue) / 1000000),
          villaAlemana: Math.round(parseFloat(avgPrices['villa alemana']) / 1000000),
          valparaiso: Math.round(parseFloat(avgPrices.valparaiso) / 1000000),
        }));
      }catch (error) {
        
        console.error('Error fetching data:', error);
      }
    }
    
  

  
    console.log("Precio Promedio:",cityAvgPrices);

    const { id } = useParams();
    const [property, setProperty] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchHouses = async () => {
        try {
            const response = await fetch(`http://localhost:3001/houses/${id}`);

            if (!response.ok) {
                throw new Error('House not found');
            }

            const data = await response.json();
            setProperty(data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(true);
        }
    };

    useEffect(() => {
        fetchHouses();
        fetchAvgPrice();
    }, []);

    console.log("casa", property)

    if (isLoading) return (
        <div className="property-modal-container">
            <NavBar searchHidden={true} />
            <div className='property-modal'>
                <div className='property-loader'>
                    <Spinner />
                </div>
            </div>
            <Footer />
        </div>
    )
    if (error) return (
        <div className="property-modal-container">
            <NavBar searchHidden={true} />
            <div className='property-modal'>
                <div className='property-loader'>
                    Ha ocurrido un error...
                </div>
            </div>
            <Footer />
        </div>
    )

    return (

        <div className="property-modal-container">
            <NavBar searchHidden={true} />
            <div className='property-modal'>
                <div className="property-modal-left">

                    <div className="modal-left-top-section">
                        <div className="property-modal-img-container">
                            {/* <img className="property-modal-img" src={property.media[0]} alt="home" /> */}
                            <ImageCarousel imageArray={property.media} height={'60vh'} />
                        </div>
                    </div>

                    <div className="modal-left-bottom-section">
                        <div className="property-modal-row">

                            <div className="property-modal-box-container">
                                <div className="property-modal-box">
                                    <div className="property-modal-atribute">
                                        <IoBedOutline className="property-modal-icon" />
                                        <div className="property-modal-value">
                                            {property.bedrooms}
                                        </div>
                                    </div>
                                </div>
                                <div className="property-modal-label">
                                    Dormitorios
                                </div>
                            </div>

                            <div className="property-modal-box-container">
                                <div className="property-modal-box">
                                    <div className="property-modal-atribute">
                                        <PiToiletLight className="property-modal-icon" />
                                        <div className="property-modal-value">
                                            {property.bathrooms}
                                        </div>
                                    </div>
                                </div>
                                <div className="property-modal-label">
                                    Baños
                                </div>
                            </div>
                        </div>

                        <div className="property-modal-row">

                            <div className="property-modal-box-container">
                                <div className="property-modal-box">
                                    <div className="property-modal-atribute">
                                        <TbMeterSquare className="property-modal-icon" />
                                        <div className="property-modal-value">
                                            {property.sqft ? <div className="property-modal-atribute"> {property.sqft}</div> : ""}
                                        </div>
                                    </div>
                                </div>
                                <div className="property-modal-label">
                                    Metros cuadrados
                                </div>
                            </div>

                            <div className="property-modal-box-container">
                                <div className="property-modal-box">
                                    <div className="property-modal-atribute">
                                        <TiLocation className="property-modal-icon" />
                                        <div className="property-modal-value">
                                            {property.city}
                                        </div>
                                    </div>
                                </div>
                                <div className="property-modal-label">
                                    Comuna
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="property-modal-right">
                    <div className="property-modal-info">
                        <div className="property-modal-header">
                            <div className="property-modal-atribute property-modal-title">{property.title}</div>
                            <div className="property-modal-price">$ {addDotsToNumber(property.price)} / 
                                <div className='property-uf'> UF {property.uf}</div>
                            </div>
                            <div className="property-modal-atribute">

                                <button className='button-PP'>

                                    <a
                                        href={property.listing_url} target="_blank" rel="noopener noreferrer" className="property-modal-url">
                                        <FaLink></FaLink> Ir a la Publicacion
                                    </a>

                                </button>

                            </div>

                        </div>
                        <div className='mapa'>
                            <Map lat={property.latitude} lng={property.longitude} />
                            <div className='msg-error-mapa'> {property.latitude ? "" : "Esta publicacion tiene oculta su direccion"} </div>

                        </div>
                        <div className="modal-lower-section">
                            <div className="property-modal-desc">
                                <div>{property.description}</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='property-calculations-title'>Calculos</div>  */}

            <div className='property-calculations'>
                <div className='property-info-row'>
                    <div className='property-left-info'>
                        <div className='calculator-wrapper'>
                            <Calculator valor={property.price} />

                        </div>

                        <div>
                            <Tasacion />
                        </div>

                    </div>

                    <div className='property-right-info'>

                        <div className='graficoPie'>
                            <Graficos valor={property.price} ciudad={property.city} />
                        </div>

                        <div className='graficoIPV'>
                            <GraficoIpv />
                        </div>

                    </div>
                </div>

            </div>

            <div className='property-comment-section'>
                <CommentSection propertyId={id} />
            </div>

            <Footer />
        </div>
    )
}
