import React, { Component } from "react";
import fullCitiesList from "../../city.list.min.json";

class Autocomplete extends Component {
  state = {
    userInput: "",
    activeSuggestion: 0,
    filteredSuggestions: [],
    chosenCityId: null
  };

  onChange = e => {
    const userInput = e.currentTarget.value;

    const filteredSuggestions =
      userInput.length >= 3 &&
      fullCitiesList.filter(
        suggestion =>
          suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );

    this.props.setShowSuggestions(true);

    this.setState(
      {
        activeSuggestion: 0,
        filteredSuggestions,
        userInput: e.currentTarget.value
      },
      () =>
        this.props.setCityToFind({
          name: this.state.userInput,
          id: this.state.chosenCityId
        })
    );
  };

  onClick = (e, id) => {
    this.props.setShowSuggestions(false);

    this.setState(
      {
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: e.currentTarget.innerText,
        chosenCityId: id
      },
      () =>
        this.props.setCityToFind({
          name: this.state.userInput,
          id: this.state.chosenCityId
        })
    );
  };

  render() {
    let suggestionsListComponent;
    if (this.props.showSuggestions && this.state.userInput) {
      if (this.state.filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className={this.props.suggestionsClassname}>
            {this.state.filteredSuggestions.map((suggestion, index) => {
              return (
                <li
                  key={suggestion.id}
                  onClick={e => this.onClick(e, suggestion.id)}
                >
                  {suggestion.name}
                </li>
              );
            })}
          </ul>
        );
      }
    }

    return (
      <>
        <input
          className={this.props.inputClassname}
          type="text"
          onChange={this.onChange}
          value={this.state.userInput}
          placeholder="Find city..."
        />
        {suggestionsListComponent}
      </>
    );
  }
}

export default Autocomplete;
