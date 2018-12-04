import React, { Component } from 'react';
import './SearchForm.css';
import * as api from '../api';

class SearchForm extends Component {
  state = {
    term: '',
    searchResults: []
  };

  render() {
    return (
      <div>
        <input
          onChange={this.onChange}
          placeholder="city, airport, station, region, district..."
          className="input-field"
        />
      </div>
    );
  }

  onChange = event => {
    const newTerm = event.target.value;
    this.setState({
      term: newTerm
    });
    this.updateSearchResults(newTerm);
  };

  updateSearchResults = async term => {
    // this will be called in the on change function,
    // takes the new term and if it is validated, will do a get request from the utils function

    const results = await api.getSearchResults(term);
    this.setState({
      searchResults: results
    });
  };
}

export default SearchForm;
