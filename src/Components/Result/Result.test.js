import React from 'react';
import Result from './Result';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, mount } from 'enzyme';

const rawAirportResult = {
  country: 'United Kingdom',
  bookingId: 'airport-38566',
  name: 'Manchester Airport',
  region: 'Greater Manchester'
};

const rawStationResult = {
  country: 'United Kingdom',
  bookingId: 'train-1158',
  name: 'Manchester - Piccadilly Train Station'
};

const badResult = {
  name: 'No results found'
};

describe('Result component', () => {
  it('Displays no result found, when a result is passed through without a country key', () => {
    const wrapper = shallow(<Result result={badResult} />);
    const results = wrapper.find('div.result-name');
    expect(results.text()).toEqual('No results found');
  });

  it('Correctly parses result type taken from the bookingId', () => {
    const airportWrapper = shallow(<Result result={rawAirportResult} />);
    const airportResultType = airportWrapper.find('div.result-type');

    const stationWrapper = shallow(<Result result={rawStationResult} />);
    const stationResultType = stationWrapper.find('div.result-type');

    expect(airportResultType.text()).toEqual('Airport');
    expect(stationResultType.text()).toEqual('Station');
  });

  it('Displays a result containing the name of the location', () => {
    const airportWrapper = shallow(<Result result={rawAirportResult} />);
    const airportResultName = airportWrapper.find('div.result-name');
    expect(airportResultName.text()).toEqual('Manchester Airport');
  });
  it('Displays a result containing full details of the returned result, if both country and region were returned', () => {
    const airportWrapper = shallow(<Result result={rawAirportResult} />);
    const airportResultDetails = airportWrapper.find('div.result-details');

    expect(airportResultDetails.text()).toEqual(
      'Greater Manchester, United Kingdom'
    );
  });
  it('Displays a result containing partial details of the returned result, if country is returned without region', () => {
    const stationWrapper = shallow(<Result result={rawStationResult} />);
    const stationResultDetails = stationWrapper.find('div.result-details');
    expect(stationResultDetails.text()).toEqual('United Kingdom');
  });
});
