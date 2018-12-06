import React from 'react';
import Result from '../Result/Result.jsx';
import PropTypes from 'prop-types';

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

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
  updateSearchTerm: PropTypes.func
};

export default SearchResults;
