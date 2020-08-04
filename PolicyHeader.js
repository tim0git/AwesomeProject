import React from 'react';
import 'react-native';
import 'jest-enzyme';
import sinon from 'sinon';
import 'react-native-mock-render/mock';
import {shallow, mount} from 'enzyme';
import {PolicyHeader} from './PolicyHeader.component';
import {ThemeProvider} from '../../services/theme';
import * as defaultTheme from '../../theme/default';

const props = {
  accessibilityLabel: 'Label',
  accessibilityHint: 'Hint',
  title: 'Title',
  subtitle: 'SUBTITLE',
  icon: 'home',
  color: 'deepskyblue',
};

describe('<PolicyHeader />', () => {
  ThemeProvider.set(defaultTheme, {components: {}, global: {}});
  const policyHeader = <PolicyHeader {...props} />;

  it('Did mount', () => {
    PolicyHeader.prototype.componentDidMount = jest.fn((e) => e);
    const spy = sinon.spy(PolicyHeader.prototype, 'componentDidMount');
    // eslint-disable-next-line
    const wrapper = mount(policyHeader);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('is accessible', () => {
    const wrapper = shallow(policyHeader);
    expect(wrapper).toHaveProp('accessible', true);
  });
  it('has an accessibility label', () => {
    const wrapper = shallow(policyHeader);
    expect(wrapper).toHaveProp('accessibilityLabel', expect.any(String));
  });
  it('has an accessibility hint', () => {
    const wrapper = shallow(policyHeader);
    expect(wrapper).toHaveProp('accessibilityHint', expect.any(String));
  });
  it('has an accessibility role of text', () => {
    const wrapper = shallow(policyHeader);
    expect(wrapper).toHaveProp('accessibilityRole', 'text');
  });

  it('Receives prop "title" and displays it as text', () => {
    const wrapper = shallow(policyHeader);
    expect(
      wrapper
        .find('Text')
        .at(0)
        .findWhere((w) => w.text() === props.title),
    ).toExist();
  });
  it('Receives prop "subtitle" and displays it as text', () => {
    const wrapper = shallow(policyHeader);
    expect(
      wrapper
        .find('Text')
        .at(1)
        .findWhere((w) => w.text() === props.subtitle),
    ).toExist();
  });
  it('Receives prop "icon" and displays it as an icon', () => {
    const wrapper = shallow(policyHeader);
    expect(wrapper.find('Icon')).toExist();
  });
  it('Receives prop "color" and applies it to title and icon', () => {
    const wrapper = shallow(policyHeader);
    expect(wrapper.find('Text').at(0)).toHaveStyle('color', props.color);
  });
});
