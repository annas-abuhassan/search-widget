import React, { Component } from 'react';
import SearchForm from './SearchForm';
import './SearchWidget.css';

class SearchWidget extends Component {
  render() {
    return (
      <div className="search-widget-container">
        <h1>Where are you going?</h1>
        <div>Pick-up Location</div>
        <SearchForm />
      </div>
    );
  }
}

export default SearchWidget;
