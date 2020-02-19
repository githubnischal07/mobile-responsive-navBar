import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "../styles/googleMaps.css";

class GoogleMaps extends React.Component {
  render() {
    return (
      <div className="mapsOut">
        <Map
          className="mapBox"
          google={this.props.google}
          zoom={8}
          initialCenter={{ lat: 32.500759, lng: -92.111221 }}
        >
          <Marker position={{ lat: 32.500759, lng: -92.11221 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAkPZKkWD6nLFc1OFrgPibH6ZfiOQuTcyc"
})(GoogleMaps);
