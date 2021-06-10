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
  const wrapper=setup();
  const count=findByTestAttr(wrapper,"count").text();
  expect(count).toBe("0");
});

test('counter increments by one on click',()=>{
  const wrapper=setup();
  //find the button 
  const button = findByTestAttr(wrapper,'increment-button');
  //click the button
  button.simulate('click');
  //find the display , and test that the number has been incremented
  const count=findByTestAttr(wrapper,"count").text();
  expect(count).toBe("1");
});

