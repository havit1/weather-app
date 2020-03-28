import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
  InfoWindow
} from "react-google-maps";

const MapComponent = withScriptjs(
  withGoogleMap(props => {
    const [showInfo, setShowInfo] = useState(false);

    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: props.coord.lat, lng: props.coord.lon }}
      >
        {props.isMarkerShown && (
          <Marker
            onClick={() => setShowInfo(true)}
            position={{ lat: props.coord.lat, lng: props.coord.lon }}
          >
            {showInfo && (
              <InfoWindow onCloseClick={() => setShowInfo(false)}>
                <>
                  <p>Temperature now:{props.currentWeather.temp} ℃</p>
                  <p>Humidity now:{props.currentWeather.humidity}</p>
                  <p>Pressure now:{props.currentWeather.pressure}</p>
                </>
              </InfoWindow>
            )}
          </Marker>
        )}
      </GoogleMap>
    );
  })
);

export default MapComponent;
