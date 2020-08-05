import 'react-native';
import React from 'react';
import 'jest-enzyme';
import 'react-native-mock-render/mock';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

// import sinon from 'sinon';
// import {shallow, mount} from 'enzyme';
// import renderer from 'react-test-renderer';

import Details from '../components/Details';

describe('<Details >', () => {
  // jest.useFakeTimers();
  const details = <Details />;

  it('Component Renders', () => {
    const component = shallow(details);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('has text details', () => {
    const wrapper = shallow(details);
    expect(wrapper.find('Text').at(0).props().children).toBe('Details Screen');
  });
});
