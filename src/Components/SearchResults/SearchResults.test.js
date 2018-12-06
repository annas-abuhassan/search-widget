import React from 'react';
import SearchResults from './SearchResults';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

describe('SearchResults component', () => {
  it('Does not render individual Result components when no results are passed through props', () => {
    const wrapper = shallow(<SearchResults results={[]} />);
    const results = wrapper.find('Result');
    expect(results.length).toEqual(0);
  });
  it('Renders individual Result components when results are passed through props', () => {
    const searchResultProps = {
      results: [
        { bookingId: 1 },
        { bookingId: 2 },
        { bookingId: 3 },
        { bookingId: 4 },
        { bookingId: 5 },
        { bookingId: 6 }
      ]
    };
    const wrapper = shallow(<SearchResults {...searchResultProps} />);
    const results = wrapper.find('Result');
    expect(results.length).toEqual(6);
  });
});
