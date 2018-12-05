const { getSearchResults } = require('../src/Components/api.js');

describe('getSearchResults()', () => {
  it('returns an array of length 6', () => {
    expect(getSearchResults('Manchester').length).toBe(6);
  });
});
