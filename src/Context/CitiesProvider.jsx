import React, { Component } from "react";
import CitiesContext from "./cities-context";

class CitiesProvider extends Component {
  state = {
    savedCities: JSON.parse(localStorage.getItem("savedCities")) || [],
    homeCity: {},
    cityToShow: {}
  };

  render() {
    return (
      <CitiesContext.Provider
        value={{
          savedCities: this.state.savedCities,
          homeCity: this.state.homeCity,
          cityToShow: this.state.cityToShow,
          setHomeCity: homeCity => this.setState({ homeCity }),
          addToSavedCities: id => {
            const savedCities = [...this.state.savedCities];
            const clickedCity = savedCities.find(savedId => savedId.id === id);
            const index = savedCities.indexOf(clickedCity);
            if (clickedCity !== undefined) {
              savedCities.splice(index, 1);
            } else {
              savedCities.push({ id: id });
            }
            this.setState({ savedCities });
          },
          setCityToShow: cityToShow => this.setState({ cityToShow })
        }}
      >
        {this.props.children}
      </CitiesContext.Provider>
    );
  }
}

export default CitiesProvider;
