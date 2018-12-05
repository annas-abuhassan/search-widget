import React from 'react';
import Result from './Result';

const SearchResults = ({ results, updateSearchTerm }) => {
  return results.length ? (
    <div className="results-container">
      {results.map(result => {
        return (
          <Result
            key={result.bookingId}
            result={result}
            updateSearchTerm={updateSearchTerm}
          />
        );
      })}
    </div>
  ) : (
    <> </>
  );
};

export default SearchResults;
