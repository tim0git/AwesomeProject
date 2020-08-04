import 'react-native';
import React from 'react';
import sinon from 'sinon';
import 'jest-enzyme';
import 'react-native-mock-render/mock';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';

// import sinon from 'sinon';
// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

import Hello from '../components/Hello';

describe('<Hello >', () => {
  // jest.useFakeTimers();

  const hello = <Hello />;

  it('Component Renders', () => {
    const component = shallow(<Hello />);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('has text Hello', () => {
    const wrapper = shallow(hello);
    expect(wrapper.find('Text').at(0).props().children).toEqual('Hello World');
  });

  it('has text hello', () => {
    const wrapper = shallow(hello);
    expect(
      wrapper
        .find('Text')
        .at(0)
        .findWhere((w) => w.text() === 'Hello World'),
    ).toExist();
  });
});
