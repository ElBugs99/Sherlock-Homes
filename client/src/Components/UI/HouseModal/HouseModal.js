import React from "react";
import "./houseModal.css";

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
                <div className="house-modal-img-container">
                    <img className="house-modal-img" src={property.media[0]} alt="home" />
                </div>
                <div className="modal-lower-section">
                    <div className="house-modal-info">

                        <div className="">{property.title}</div>
                        <div className="house-modal-price">${property.price}</div>
                        <div className="">Dormitorios: {property.bedrooms}</div>
                        <div className="">Baños: {property.bathrooms}</div>
                        {property.sqft ? <div className="">Metros cuadrados: {property.sqft}</div> : ""}
                        <div className="">{property.city}</div>
                        <a href={property.listing_url} target="_blank" rel="noopener noreferrer">{property.listing_url}</a>

                    </div>
                    <div className="">
                        <div>{property.description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
