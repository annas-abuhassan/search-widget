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
        Pick-up Location
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

  focus = e => {
    this.setState({
      display: true
    });
  };

  loseFocus = e => {
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
