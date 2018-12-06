import axios from 'axios';

export const getSearchResults = term => {
  const API_URL = `https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${term}`;

  if (term.length >= 2)
    return axios.get(API_URL).then(({ data }) => data.results.docs);

  return [];
};
