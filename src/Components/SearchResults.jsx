import React from 'react';
import Result from './Result';
import './SearchResults.css';

const SearchResults = ({ results }) => {
  return results.length ? (
    <div className="results-container">
      {results.map(result => {
        return <Result key={result.bookingId} result={result} />;
      })}
    </div>
  ) : (
    <> </>
  );
};

export default SearchResults;
