import React, { Component } from "react";
import "./Search.scss";
import SearchResultCard from "../SearchResultCard/SearchResultCard";

class Search extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    let value = event.target.value;
    this.setState({ value });
    this.props.getPeople(value);
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    let { peopleData, loading } = this.props;
    let resultList = loading ? (
      <p>Loading results...</p>
    ) : (
      peopleData.map((personInfo, index) => {
        return <SearchResultCard personInfo={personInfo} key={index} />;
      })
    );

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <div className="results">{resultList}</div>
      </div>
    );
  }
}

export default Search;
