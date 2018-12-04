import React from 'react';
import './Result.css';

const Result = ({ result }) => {
  const { bookingId, name, country, region } = result;
  return country ? (
    <div className="result">
      <div
        className="result-type"
        style={{ backgroundColor: parseResultType(bookingId)[1] }}
      >
        {parseResultType(bookingId)[0]}
      </div>
      <div className="result-body">
        <div className="result-name">{name} </div>
        <div className="result-details">
          {region}, {country}
        </div>
      </div>
    </div>
  ) : (
    <div className="result">
      <div className="result-type">N/A</div>
      <div className="result-body">
        <div className="result-name">No results found</div>
        <div className="result-details">Try something else...</div>
      </div>
    </div>
  );
};

const parseResultType = bookingId => {
  const resultRefObj = {
    city: '#79B4E2',
    train: '#9C9BB7',
    airport: '#F08080',
    district: '#7BC68E',
    region: '#7BC68E'
  };

  const resultType = bookingId.slice(0, bookingId.indexOf('-'));
  return resultType === 'train'
    ? ['Station', '#9C9BB7']
    : [
        resultType.charAt(0).toUpperCase() + resultType.slice(1),
        resultRefObj[resultType]
      ];
};

export default Result;
