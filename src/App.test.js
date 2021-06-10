import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to Shallow Wrapper for the App component.
 * @function setup
 * @returns {ShallowWrapper} 
 */
const setup=()=> shallow(<App/>);
const findByTestAttr =(wrapper,val)=> wrapper.find(`[data-test='${val}']`);

test('renders non-empty component without crashing', () => {
  const wrapper = setup();
  const appcomponent = findByTestAttr(wrapper,'component-app');
  expect(appcomponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper,'increment-button');
  expect(button.length).toBe(1);
});

test('renders counter display button', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper,'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter starts with 0',()=>{

});

test('counter increments by one on click',()=>{

});

