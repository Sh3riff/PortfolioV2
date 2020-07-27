import React from 'react';
import GoogleMapReact from 'google-map-react';
import { GoogleApiKey } from '../apiKey';
import MarkerIcon from '../img/marker.png'

const Marker = ({ text, image }) => <div style={{color: "red"}}>{text} <img src={image} alt="marker" style={ {width: "20px"} } /></div>;

const Map = ({lat, lng}) => {

  return (
    <div style={{ height: '100%', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GoogleApiKey }}
        center={[lat, lng]}
        defaultZoom={10}
      >
        <Marker
          lat={lat}
          lng={lng}
          text= 'user'
          image={MarkerIcon}
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map;