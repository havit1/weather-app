import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import SearchPage from "./Components/Search/SearchPage";
import CitiesProvider from "./Context/CitiesProvider";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <CitiesProvider>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:name" exact component={SearchPage} />

            <Route to="/error" component={() => <h1>404 not found</h1>} />
          </Switch>
        </div>
      </CitiesProvider>
    );
  }
}

export default App;
