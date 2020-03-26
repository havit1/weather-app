import React, { Component } from "react";
import AutoComplete from "../common/AutoComplete";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

class Search extends Component {
  state = {
    cityToFind: {}
  };

  onChange = cityToFind => {
    this.setState({ cityToFind });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.cityToFind.name}`);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <React.Fragment>
          <AutoComplete setCityToFind={this.onChange} />
        </React.Fragment>
        {/* <input
          onChange={this.onChange}
          value={this.state.searchInput}
          placeholder="Find city..."
        ></input> */}
      </form>
    );
  }
}

export default withRouter(Search);
