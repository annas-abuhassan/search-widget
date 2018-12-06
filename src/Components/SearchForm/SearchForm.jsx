import React, { Component } from 'react';
import _ from 'underscore';
import './SearchForm.css';
import SearchResults from '../SearchResults/SearchResults.jsx';
import * as api from '../api/api.js';

class SearchForm extends Component {
  state = {
    prevTerm: '',
    term: '',
    searchResults: [],
    display: false,
    loading: false
  };

  render() {
    const { display, searchResults, term, loading } = this.state;

    return (
      <form className="search-form-container" onSubmit={this.handleSubmit}>
        <h1>Where are you going?</h1>
        <label>Pick-up Location</label>
        <input
          aria-label="Search widget input field"
          onChange={this.onChange}
          placeholder="city, airport, station, region, district..."
          onClick={this.focus}
          value={term}
          className={loading ? 'loading' : ''}
        />
        {display ? (
          <SearchResults
            results={searchResults}
            updateSearchTerm={this.updateSearchTerm}
          />
        ) : (
          <> </>
        )}
      </form>
    );
  }
  handleSubmit = e => {
    e.preventDefault();
    // whatever extra functionality this widget would get incorporated into
  };

  focus = () => {
    this.setState({
      term: this.state.prevTerm,
      display: true
    });
  };

  onChange = e => {
    const newTerm = e.target.value;
    this.setState({
      prevTerm: newTerm,
      term: newTerm,
      loading: true
    });
    this.updateSearchResults(newTerm);
  };

  updateSearchResults = _.debounce(async term => {
    try {
      const results = await api.getSearchResults(term);
      this.setState({
        searchResults: results,
        display: true,
        loading: false
      });
    } catch (error) {
      console.log(error);
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
