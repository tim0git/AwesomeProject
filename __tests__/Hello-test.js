import 'react-native';
import React from 'react';
import 'jest-enzyme';
import 'react-native-mock-render/mock';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

// import {shallow, mount} from 'enzyme';
// import sinon from 'sinon';
// import renderer from 'react-test-renderer';

import Hello from '../components/Hello';

describe('<Hello >', () => {
  // jest.useFakeTimers();
  const hello = <Hello />;

  it('Component Renders', () => {
    const component = shallow(hello);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
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
