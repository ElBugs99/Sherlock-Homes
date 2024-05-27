import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';
import { FaMapPin, FaStreetView } from "react-icons/fa";

const Marker= ({ text }) =>
   <div>
    <FaMapPin style={{color:'green' ,fontSize:'27px'}}/>

    {text}
   
   </div>;
   const StreetViewIcon = ({ onClick }) => (
    <div onClick={onClick}>
      <FaStreetView style={{ color: 'blue', fontSize: '27px', cursor: 'pointer' }} />
    </div>
  );

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

  const handleApiLoaded = (map, maps) => {
    // Use map and maps objects to add additional functionalities
  };



  console.log("latitud mapa" , lat,lng)
  return (
    
    <div className="map" style={{ height: '40vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAEDMgJRUtJOdsBK45_U_-ytsFPfpZGYas" }}
        defaultCenter={defaultProps.center}
       
        defaultZoom={defaultProps.zoom}
        layerTypes={['TransitLayer']}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        options={{
          streetViewControl:true,
          styles: [
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#FFBB00"
                    },
                    {
                        "saturation": 43.400000000000006
                    },
                    {
                        "lightness": 37.599999999999994
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#00FF6A"
                    },
                    {
                        "saturation": -1.0989010989011234
                    },
                    {
                        "lightness": 11.200000000000017
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#FFC200"
                    },
                    {
                        "saturation": -61.8
                    },
                    {
                        "lightness": 45.599999999999994
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#FF0300"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 51.19999999999999
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#FF0300"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 52
                    },
                    {
                        "gamma": 1
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#0078FF"
                    },
                    {
                        "saturation": -13.200000000000003
                    },
                    {
                        "lightness": 2.4000000000000057
                    },
                    {
                        "gamma": 1
                    }
                ]
            }
        ]
        }}
       
      >

        
        <Marker
          lat={lat}
          lng={lng}
        
          
        />
      </GoogleMapReact>
    </div>
  );
}