import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import SearchPage from "./Components/Search/SearchPage";
import "./App.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search/:name" exact component={SearchPage} />
      </Switch>
    </div>
  );
}

export default App;
