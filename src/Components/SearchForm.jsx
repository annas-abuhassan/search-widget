import React, { Component } from 'react';
import _ from 'underscore';
import './SearchForm.css';
import SearchResults from './SearchResults.jsx';
import * as api from '../api';

class SearchForm extends Component {
  state = {
    prevTerm: '',
    term: '',
    searchResults: [],
    display: false
  };

  render() {
    const { display, searchResults, term } = this.state;

    return (
      <div className="search-form-container">
        <h1>Where are you going?</h1>
        <h2>Pick-up Location</h2>
        <input
          aria-label="Search widget input field"
          onChange={this.onChange}
          placeholder="city, airport, station, region, district..."
          className="input-field"
          onClick={this.focus}
          value={term}
        />
        {display ? (
          <SearchResults
            results={searchResults}
            updateSearchTerm={this.updateSearchTerm}
          />
        ) : (
          <> </>
        )}
      </div>
    );
  }

  focus = () => {
    this.setState({
      term: this.state.prevTerm,
      display: true
    });
  };

  onChange = e => {
    const newTerm = e.target.value;
    this.setState({ prevTerm: newTerm, term: newTerm, display: true });
    this.updateSearchResults(newTerm);
  };

  updateSearchResults = _.debounce(async term => {
    console.log('HI');
    if (term.length >= 2) {
      try {
        const results = await api.getSearchResults(term);
        this.setState({
          searchResults: results
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      this.setState({
        searchResults: []
      });
    }
  }, 500);

  updateSearchTerm = searchTermResult => {
    this.setState({
      term: searchTermResult,
      display: false
    });
  };
}

export default SearchForm;
