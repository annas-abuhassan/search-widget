import React, { Component } from 'react';
import './SearchForm.css';
import SearchResults from './SearchResults.jsx';
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
        <SearchResults results={this.state.searchResults} />
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
    if (term.length >= 2) {
      const results = await api.getSearchResults(term);
      this.setState({
        searchResults: results
      });
    } else {
      this.setState({
        searchResults: []
      });
    }
  };
}

export default SearchForm;
