import React, { Component } from "react";
import Search from "../../components/Search/Search";

export default class SearchContainer extends Component {
  state = {
    peopleData: [],
    loading: false
  };

  receivedResults = data => {
    this.setState({ 
      peopleData: data.results,
      loading: false
    });
  };

  getPeople = event => {
    this.setState({ loading: true });
    fetch(`https://swapi.co/api/people/?search=${event}`)
      .then(res => res.json())
      .then(this.receivedResults);
  };

  render() {
    return (
      <Search getPeople={this.getPeople} peopleData={this.state.peopleData} loading={this.state.loading} />
    );
  }
}
