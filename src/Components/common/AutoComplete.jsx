import React, { Component } from "react";
import fullCitiesList from "../../city.list.min.json";

class Autocomplete extends Component {
  state = {
    userInput: "",
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
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

    this.setState(
      {
        activeSuggestion: 0,
        filteredSuggestions,
        showSuggestions: true,
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

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    let suggestionsListComponent;
    if (this.state.showSuggestions && this.state.userInput) {
      if (this.state.filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul>
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
      } else {
        suggestionsListComponent = (
          <div>
            <em>No suggestions!</em>
          </div>
        );
      }
    }

    return (
      <>
        <input
          type="text"
          onChange={this.onChange}
          //   onKeyDown={this.onKeyDown}
          value={this.state.userInput}
          placeholder="Find city..."
        />
        {suggestionsListComponent}
      </>
    );
  }
}

export default Autocomplete;
