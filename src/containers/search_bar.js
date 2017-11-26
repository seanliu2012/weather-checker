import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { featchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
  onFormSubmit(event) {
    event.preventDefault();
    // fetch weather data
    this.props.featchWeather(this.state.term);
    this.setState({ term: '' });
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="form-inline search-bar">
        <input placeholder="City name for search"
          className="form-control city-input"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <button className="btn btn-secondary">Submit</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ featchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
