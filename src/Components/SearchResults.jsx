import React from 'react';

const SearchResults = ({ results }) => {
  return results ? (
    <div>
      {results.map(result => {
        return <div key={result.bookingId}>{result.bookingId}</div>;
      })}
    </div>
  ) : (
    <> </>
  );
};

export default SearchResults;
