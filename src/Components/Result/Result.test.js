import React from 'react';
import Result from './Result';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, mount } from 'enzyme';

const goodResult = {
  country: 'United Kingdom',
  bookingId: 'airport-38566',
  name: 'Manchester Airport',
  region: 'Greater Manchester'
};

const badResult = {
  name: 'No results found'
};

describe('Result component', () => {
  it('Correctly parses result type taken from the bookingId', () => {
    const wrapper = shallow(<Result result={goodResult} />);
    const results = wrapper.find('div.result-type');
    expect(results.text()).toEqual('Airport');
  });
  it('Displays no result found, when no a result is passed through without a country key', () => {
    const wrapper = shallow(<Result result={badResult} />);
    const results = wrapper.find('div.result-type');
    expect(results.text()).toEqual('N/A');
  });
});
