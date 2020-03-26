import React, { Component } from "react";
import ShortInfo from "../ShortInfo/ShortInfo";
import SavedCities from "../SavedCities/SavedCities";
import axios from "axios";

class Home extends Component {
  state = {
    cityInfo: {},
    loaded: false
  };

  getUserWeather() {
    navigator.geolocation.getCurrentPosition(
      async pos => {
        const userWeather = await this.getWeather(
          pos.coords.latitude,
          pos.coords.longitude
        );
        this.setState({ cityInfo: userWeather, loaded: true });
      },
      err => console.warn(`ERROR(${err.code}): ${err.message}`),
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  }

  getWeather(latitude, longitude) {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=97ea200bf11177ab3c207304b3be2608`
    );
  }

  componentDidMount() {
    this.getUserWeather();
  }

  render() {
    const { data } = this.state.cityInfo;
    const { loaded } = this.state;

    return (
      loaded && (
        <div>
          <ShortInfo
            weather={data.weather}
            main={data.main}
            wind={data.wind}
            sys={data.sys}
            name={data.name}
          ></ShortInfo>
          <SavedCities />
        </div>
      )
    );
  }
}

export default Home;
