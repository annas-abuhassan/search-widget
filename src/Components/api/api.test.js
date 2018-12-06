import { getSearchResults } from './api';

describe('getSearchResults()', () => {
  it('returns an array', async () => {
    const searchResults = await getSearchResults('');
    expect(Array.isArray(searchResults)).toEqual(true);
  });

  it('does not return search results if the search term is shorter than two characters', async () => {
    const searchResultsZero = await getSearchResults('');
    const searchResultsOne = await getSearchResults('a');
    expect(searchResultsZero.length).toBe(0);
    expect(searchResultsOne.length).toBe(0);
  });
  it('takes a search term and returns an array containing 6 results related to that term', async () => {
    const searchResults = await getSearchResults('Manchester');
    expect(searchResults.length).toBe(6);
    expect(searchResults[0]).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        country: expect.any(String),
        bookingId: expect.any(String),
        region: expect.any(String)
      })
    );
  });
});
