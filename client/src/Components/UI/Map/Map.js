import React from "react";
import GoogleMapReact from 'google-map-react';
import { FaMapPin } from "react-icons/fa";

const AnyReactComponent = ({ text }) =>
   <div>
    <FaMapPin />

    {text}
   
   </div>;

export default function SimpleMap({lat,lng}){

  const defaultProps = {
    center: {
      lat: Number(lat),
      lng: Number(lng)
    },
    zoom: 18,
    size:{
        width: 500,
        height: 650
    },
    streetViewControl: true
  };

  console.log("latitud mapa" , lat,lng)
  return (
    // Important! Always set the container height explicitly
    <div className="map" style={{ height: '40vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAEDMgJRUtJOdsBK45_U_-ytsFPfpZGYas" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        layerTypes={['TransitLayer']}
      >
        <AnyReactComponent
          lat={lat}
          lng={lng}
          
        />
      </GoogleMapReact>
    </div>
  );
}