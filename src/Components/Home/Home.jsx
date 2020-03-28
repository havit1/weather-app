import React, { Component } from "react";
import ShortInfo from "../ShortInfo/ShortInfo";
import SavedCities from "../SavedCities/SavedCities";
import { getWeatherWithPos } from "../../utils/apiRequests";
import CitiesContext from "../../Context/cities-context";
class Home extends Component {
  state = {
    cityInfo: {},
    loaded: false
  };

  getUserWeather() {
    navigator.geolocation.getCurrentPosition(
      async pos => {
        console.log("Getting user home weather");
        try {
          const userWeather = await getWeatherWithPos(
            pos.coords.latitude,
            pos.coords.longitude
          );
          this.setState({ cityInfo: userWeather, loaded: true });
          this.context.setHomeCity(userWeather);
        } catch (error) {
          console.log(error.message);
          this.setState({ loaded: false });
        }
      },
      err => console.warn(`ERROR(${err.code}): ${err.message}`),
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  }

  componentDidMount() {
    this.getUserWeather();
  }

  render() {
    const { cityInfo } = this.state;
    const { loaded } = this.state;

    return (
      <>
        {loaded && (
          <ShortInfo
            weather={cityInfo.weather}
            main={cityInfo.main}
            wind={cityInfo.wind}
            sys={cityInfo.sys}
            name={cityInfo.name}
            id={cityInfo.id}
          ></ShortInfo>
        )}
        <SavedCities />
      </>
    );
  }
}

Home.contextType = CitiesContext;

export default Home;
