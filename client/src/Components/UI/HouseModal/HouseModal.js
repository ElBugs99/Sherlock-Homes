import React from "react";
import "./houseModal.css";
import { PiToiletLight } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";
import { TbMeterSquare } from "react-icons/tb";
import { TiLocation } from "react-icons/ti";

export default function HouseModal({ property, onClose }) {

    return (
        <div
            className="house-modal"
            onClick={(e) => {
                if (e.target.className === "house-modal") {
                    onClose()
                }
            }
            }
        >
            <div className="house-modal-container">

                <div className="house-modal-left">

                    <div className="modal-left-top-section">
                        <div className="house-modal-img-container">
                            <img className="house-modal-img" src={property.media[0]} alt="home" />
                        </div>
                    </div>

                    <div className="modal-left-bottom-section">
                        <div className="house-modal-row">

                            <div className="house-modal-box-container">
                                <div className="house-modal-box">
                                    <div className="house-modal-atribute">
                                        <IoBedOutline className="house-modal-icon" />
                                        <div className="house-modal-value">
                                            {property.bedrooms}
                                        </div>
                                    </div>
                                </div>
                                <div className="house-modal-label">
                                    Dormitorios
                                </div>
                            </div>

                            <div className="house-modal-box-container">
                                <div className="house-modal-box">
                                    <div className="house-modal-atribute">
                                        <PiToiletLight className="house-modal-icon" />
                                        <div className="house-modal-value">
                                            {property.bathrooms}
                                        </div>
                                    </div>
                                </div>
                                <div className="house-modal-label">
                                    Baños
                                </div>
                            </div>
                        </div>


                        <div className="house-modal-row">

                            <div className="house-modal-box-container">
                                <div className="house-modal-box">
                                    <div className="house-modal-atribute">
                                        <TbMeterSquare className="house-modal-icon" />
                                        <div className="house-modal-value">
                                            {property.sqft ? <div className="house-modal-atribute"> {property.sqft}</div> : ""}
                                        </div>
                                    </div>
                                </div>
                                <div className="house-modal-label">
                                    Metros cuadrados
                                </div>
                            </div>

                            <div className="house-modal-box-container">
                                <div className="house-modal-box">
                                    <div className="house-modal-atribute">
                                        <TiLocation className="house-modal-icon" />
                                        <div className="house-modal-value">
                                            {property.city}
                                        </div>
                                    </div>
                                </div>
                                <div className="house-modal-label">
                                    Comuna
                                </div>
                            </div>
                        </div>

                        <div className="house-modal-atribute">Url original:</div>
                        <a href={property.listing_url} target="_blank" rel="noopener noreferrer" className="house-modal-url">{property.listing_url}</a>
                    </div>

                </div>

                <div className="house-modal-right">
                    <div className="house-modal-info">
                        <div className="house-modal-atribute house-modal-title">{property.title}</div>
                        <div className="house-modal-price">$ {property.price}</div>
                        <div className="modal-lower-section">
                            <div className="">
                                <div>{property.description}</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}
