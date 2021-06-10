import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders non-empty component without crashing', () => {
  const wrapper = shallow(<App />);
  const appcomponent = wrapper.find("[data-test='component-app']");
  expect(appcomponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = shallow(<App />);
  const button = wrapper.find("[data-test='increment-button']");
  expect(button.length).toBe(1);
});

test('renders counter display button', () => {
  const wrapper = shallow(<App />);
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.length).toBe(1);
});

