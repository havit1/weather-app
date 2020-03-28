import React, { Component } from "react";
import {
  getCurrentWeatherWithName,
  getWeatherForWeek
} from "../../utils/apiRequests";
import ShortInfo from "../ShortInfo/ShortInfo";
import DayPage from "../DayPages/DayPage";
import { sortByDay } from "../../utils/utils";
import WeekPage from "../DayPages/WeekPage";

class SearchPage extends Component {
  state = {
    cityWeather: {},
    forecast: {},
    currentWeatherLoaded: false,
    futureWeatherLoaded: false
  };

  getCityWeather = async () => {
    console.log("Getting city weather on SearchPage");
    try {
      const weather = await getCurrentWeatherWithName(
        this.props.match.params.name
      );
      this.setState({ cityWeather: weather, currentWeatherLoaded: true });

      const futureWeather = await getWeatherForWeek(weather.id);
      this.setState({ forecast: futureWeather });
      futureWeather.list &&
        this.setState({
          forecast: sortByDay(futureWeather.list),
          futureWeatherLoaded: true
        });
    } catch (error) {
      console.log(error.message);
      this.props.history.replace("/error");
    }
  };

  componentDidMount() {
    this.getCityWeather();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.name === this.props.match.params.name) return;
    this.setState({ currentWeatherLoaded: false, futureWeatherLoaded: false });
    this.getCityWeather();
  }

  renderDay = () => {
    const {
      forecast,
      cityWeather: { coord, main }
    } = this.state;
    const { location } = this.props;

    const weatherToShow =
      forecast.length > 0 && location.search === "?today"
        ? forecast[0]
        : location.search === "?tommorrow"
        ? forecast[1]
        : forecast;

    if (
      this.props.location.search === "?today" ||
      this.props.location.search === "?tommorrow"
    ) {
      return (
        <DayPage
          coord={coord}
          weatherArray={weatherToShow}
          day={location.search === "?today" ? "today" : "tommorrow"}
          currentTemp={main.temp}
        />
      );
    } else if (this.props.location.search === "?week") {
      return <WeekPage weatherArray={weatherToShow} />;
    }
  };

  render() {
    const {
      cityWeather,
      currentWeatherLoaded,
      futureWeatherLoaded
    } = this.state;

    return (
      currentWeatherLoaded && (
        <div>
          <ShortInfo
            main={cityWeather.main}
            sys={cityWeather.sys}
            name={cityWeather.name}
            id={cityWeather.id}
          />
          {futureWeatherLoaded && this.renderDay()}
        </div>
      )
    );
  }
}

export default SearchPage;
