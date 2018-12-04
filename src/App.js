import React, { Component } from 'react';
import './App.css';
import SearchWidget from './Components/SearchWidget';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchWidget />
      </div>
    );
  }
}

export default App;
