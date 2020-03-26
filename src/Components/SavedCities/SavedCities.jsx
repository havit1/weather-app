import React, { Component } from "react";

class SavedCities extends Component {
  state = {
    cities: []
  };

  componentDidMount() {
    const savedCities = localStorage.getItem("savedCities");
    if (!savedCities) return;
    const savedCitiesParsed = JSON.parse(savedCities);
    this.setState({ cities: savedCities });
  }

  render() {
    return <div></div>;
  }
}

export default SavedCities;
