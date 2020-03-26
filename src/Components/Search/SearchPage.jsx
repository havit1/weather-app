import React, { Component } from "react";
import { getCurrentWeatherWithName } from "../../utils/apiRequests";
import ShortInfo from "../ShortInfo/ShortInfo";

class SearchPage extends Component {
  state = {
    cityWeather: {},
    loaded: false
  };

  getCityWeather = async () => {
    const weather = await getCurrentWeatherWithName(
      this.props.match.params.name
    );
    this.setState({ cityWeather: weather, loaded: true });
  };

  componentDidMount() {
    this.getCityWeather();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.name === this.props.match.params.name) return;
    this.setState({ loaded: false });
    this.getCityWeather();
  }

  render() {
    const {
      loaded,
      cityWeather: { weather, main, wind }
    } = this.state;

    return (
      loaded && (
        <div>
          <ShortInfo weather={weather} main={main} wind={wind} />
        </div>
      )
    );
  }
}

export default SearchPage;
