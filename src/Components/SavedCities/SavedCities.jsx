import React, { Component } from "react";
import { getWeatherOfCityGroupById } from "../../utils/apiRequests";
import { Link } from "react-router-dom";
import CitiesContext from "../../Context/cities-context";
import "./SavedCities.scss";

class SavedCities extends Component {
  state = {
    citiesWithDetailedInfo: []
  };

  getWeather = async () => {
    console.log("Getting weather in Saved cities");
    try {
      const data = await getWeatherOfCityGroupById(this.context.savedCities);
      this.setState({ citiesWithDetailedInfo: data });
    } catch (err) {
      console.error("Error when loading weather data in SavedCities.jsx");
      this.setState({ citiesWithDetailedInfo: [] });
    }
  };

  compare(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    else {
      for (let i = 0; i < arr1.length; i++)
        if (arr1[i].id !== arr2[i].id) return false;
      return true;
    }
  }

  componentDidMount() {
    if (this.context.savedCities.length > 0) {
      this.getWeather();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      !this.compare(this.context.savedCities, this.state.citiesWithDetailedInfo)
    ) {
      console.log("SavedCities");
      this.getWeather();
    }
  }

  render() {
    const { citiesWithDetailedInfo } = this.state;

    return (
      <div className="saved-cities">
        <h1 className="saved-cities__header-text">Saved Cities</h1>
        <ul className="saved-cities__list">
          {citiesWithDetailedInfo.map(
            city =>
              city && (
                <li className="saved-cities__list-element" key={city.id}>
                  <Link to={`/${city.name}?today`}>
                    <div>{city.name}</div>
                    <div>{city.main.temp} ℃</div>
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
    );
  }
}

SavedCities.contextType = CitiesContext;

export default SavedCities;
