import React, { Component } from "react";
import "./App.css";
import SearchContainer from "./containers/SearchContainer/SearchContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Star Wars Search</header>
        <SearchContainer />
      </div>
    );
  }
}

export default App;
