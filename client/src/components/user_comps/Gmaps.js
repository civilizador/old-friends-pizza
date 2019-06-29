import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const mapStyles = {
  width: '100%',
  height: '20rem',
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
       google={this.props.google}
           zoom={8}
          style={mapStyles}
          center={ { lat:  42.3601, lng: -71.0589 } }
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />

    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMAPS
 })(MapContainer)
