import 'react-native';
import React from 'react';
import 'jest-enzyme';
import 'react-native-mock-render/mock';
import MockedStackNavigator from '../__mocks__/MockedStackNavigatior';
import Hello from '../components/Hello';
import Details from '../components/Details';
import GalleryNav from '../components/GalleryNav';

// import {shallow} from 'enzyme';
// import toJson from 'enzyme-to-json';

describe('<GalleryNav > Tab Nav Mock Tests', () => {
  it('MockTabNavigator <Hello > should render correctly', () => {
    const toJSON = render(<MockedStackNavigator component={Hello} />);
    expect(toJSON).toMatchSnapshot();
  });

  it('MockTabNavigator <Details > should render correctly', () => {
    const toJSON = render(<MockedStackNavigator component={Details} />);
    expect(toJSON).toMatchSnapshot();
  });

  it('MockTabNavigator <GalleryNav > should render correctly', () => {
    const toJSON = render(<MockedStackNavigator component={GalleryNav} />);
    expect(toJSON).toMatchSnapshot();
  });
});
