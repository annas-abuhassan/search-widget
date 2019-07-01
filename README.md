# Search Widget

The point of this repository is to demonstrate my ability to create a "Search Widget" ala [Rental Cars](www.rentalcars.com)

I chose React to make this app, and used Jest + Enzyme for creating tests.  

## Feature Breakdown

Core features, as per the given specification:

- [x] Text box labelled 'Pick-up Location'
- [x] Placeholder text within input box
- [x] Focus state is applied upon giving the input box focus
- [x] Correct criteria is read out when using a screen reader
- [x] Placeholder text disappears when a single character is entered into the input box
- [x] Search results are displayed upon entering two or more characters into the input box
- [x] Search results displayed are limited to 6
- [x] When no search term is recognised, a "No results found" message appears
- [x] When removing search term leaving only one character, the search results are no longer displayed
- [x] All styling as per rentalcars.com

Additional features I felt was nifty:

- [x] Loading spinner appears when API calls are made
- [x] Clicking a search result completes the input box with a complete search query
- [x] Clicking back onto the input box returns back the original search term
- [x] Used debouncing to limit API calls when a user is entering / deleting a search term
- [x] Implemented unit tests

## Getting Started

### Prerequisites

This repo requires the following packages:

- [react](https://www.npmjs.com/package/react)
- [enzyme](https://www.npmjs.com/package/enzyme)
- [axios](https://www.npmjs.com/package/axios)
- [lodash.debounce](https://www.npmjs.com/package/lodash.debounce)

### Steps

1. Clone this repo

   ```
   git clone https://github.com/annas-abuhassan/search-widget.git
   ```

2. Change directory to the cloned repo and install all package dependencies:

   ```
   npm i
   ```

3. Run a local version of the app on localhost:3000:

   ```
   npm start
   ```

### Testing

Testing has been carried out using Jest + Enzyme.  
The tests can be run by using:

```
npm t
```

## Author

Annas Abu-Hassan
