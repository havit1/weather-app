import React, { Component } from "react";
import AutoComplete from "../common/AutoComplete";
import { withRouter } from "react-router-dom";

class Search extends Component {
  state = {
    cityToFind: {}
  };

  onChange = cityToFind => {
    this.setState({ cityToFind });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/${this.state.cityToFind.name}?today`);
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
