import React from "react";
import moment from "moment";
import MapComponent from "../common/MapComponent";
import "./DayPage.scss";

const DayPage = ({ weatherArray, day, coord, currentWeather }) => {
  const name = moment(weatherArray[0].dt_txt).format("dddd");
  const date = moment(weatherArray[0].dt_txt).date();

  return (
    <section className="day-page">
      <div className="day-page__forecast">
        <h1>{day[0].toUpperCase() + day.slice(1)}</h1>
        <h3>{`${name}, ${date}`}</h3>
        <div className="day-page__forecast-table">
          <div className="day-page__forecast-table-row">
            <p className="day-page__forecast-table-column-1">Time</p>
            <p className="day-page__forecast-table-column-2">Weather</p>
          </div>
          {weatherArray.map(day => (
            <div className="day-page__forecast-table-row" key={day.dt}>
              <p className="day-page__forecast-table-column-1">
                {moment(day.dt_txt).format("H:mm")}
              </p>
              <p className="day-page__forecast-table-column-2">{`${
                day.main.temp
              } ℃, ${day.weather[0].description[0].toUpperCase() +
                day.weather[0].description.slice(1)}, Wind - ${
                day.wind.speed
              } meter per second`}</p>
            </div>
          ))}
        </div>
      </div>
      <MapComponent
        currentWeather={currentWeather}
        coord={coord}
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&callback=initMap`}
        loadingElement={<div className="map__loadingElement" />}
        containerElement={<div className="map__containerElement" />}
        mapElement={<div className="map__mapElement" />}
      />
    </section>
  );
};

export default DayPage;
