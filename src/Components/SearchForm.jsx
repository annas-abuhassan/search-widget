import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  state = {
    term: ''
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
  };
}

export default SearchForm;
