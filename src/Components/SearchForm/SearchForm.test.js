import React from 'react';
import SearchForm from './SearchForm';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, mount } from 'enzyme';

describe('SearchForm component', () => {
  it('starts with an empty input field', () => {
    const wrapper = shallow(<SearchForm />);
    const inputFieldText = wrapper.find('input').text();
    expect(inputFieldText).toEqual('');
  });

  it('accepts alphanumeric inputs from the user, which updates the "term" in state', () => {
    const wrapper = shallow(<SearchForm />);
    wrapper.find('input').simulate('change', { target: { value: 'a' } });
    expect(wrapper.state().term).toEqual('a');
  });

  it('accepts alphanumeric inputs from the user, which sets "loading" in state to true', () => {
    const wrapper = shallow(<SearchForm />);
    wrapper.find('input').simulate('change', { target: { value: 'abc' } });
    expect(wrapper.state().loading).toEqual(true);
  });
});
