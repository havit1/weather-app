import React, { Component } from "react";
import AutoComplete from "../common/AutoComplete";
import { withRouter } from "react-router-dom";
import "./SearchForm.scss";

class Search extends Component {
  state = {
    cityToFind: {},
    showSuggestions: false
  };

  setShowSuggestions = showSuggestions => {
    this.setState({ showSuggestions });
  };

  onChange = cityToFind => {
    this.setState({ cityToFind });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.cityToFind.name) return;
    this.setState({ showSuggestions: false });
    this.props.history.push(`/${this.state.cityToFind.name}?today`);
  };

  render() {
    const { showSuggestions } = this.state;
    return (
      <form className="search-form__form" onSubmit={this.onSubmit}>
        <button className="search-form__form-button">S</button>
        <AutoComplete
          onFormSubmit={this.onSubmit}
          setShowSuggestions={this.setShowSuggestions}
          showSuggestions={showSuggestions}
          inputClassname="search-form__form-input"
          suggestionsClassname="search-form__form-suggestions"
          setCityToFind={this.onChange}
        />
      </form>
    );
  }
}

export default withRouter(Search);
