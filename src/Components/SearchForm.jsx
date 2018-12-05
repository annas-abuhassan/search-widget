import React, { Component } from 'react';
import './SearchForm.css';
import SearchResults from './SearchResults.jsx';
import * as api from '../api';

class SearchForm extends Component {
  state = {
    term: '',
    searchResults: [],
    display: false
  };

  render() {
    const { display, searchResults } = this.state;

    return (
      <div className="search-form-container">
        <h1>Where are you going?</h1>
        <h2>Pick-up Location:</h2>
        <input
          aria-label="Search widget input field"
          onChange={this.onChange}
          placeholder="city, airport, station, region, district..."
          className="input-field"
          onBlur={this.loseFocus}
          onClick={this.focus}
        />
        {display ? <SearchResults results={searchResults} /> : <> </>}
      </div>
    );
  }

  focus = () => {
    this.setState({
      display: true
    });
  };

  loseFocus = () => {
    this.setState({
      display: false
    });
  };

  onChange = e => {
    const newTerm = e.target.value;
    this.setState({ term: newTerm, display: true });
    this.updateSearchResults(newTerm);
  };

  updateSearchResults = async term => {
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
