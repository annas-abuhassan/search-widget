import React from 'react';
import Result from './Result';

const SearchResults = ({ results }) => {
  return results ? (
    <div>
      {results.map(result => {
        return <Result key={result.bookingId} result={result} />;
      })}
    </div>
  ) : (
    <> </>
  );
};

export default SearchResults;
