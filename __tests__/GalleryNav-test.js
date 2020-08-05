import 'react-native';
import React from 'react';
import 'jest-enzyme';
import 'react-native-mock-render/mock';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import GalleryNav from '../components/GalleryNav';

// import App from '../App';
// import Hello from '../components/Hello';
// import Details from '../components/Details';

describe('<GalleryNav >', () => {
  const galleryNav = <GalleryNav />;

  it('Component Renders', () => {
    const component = shallow(galleryNav);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('has a stack navigator', () => {
    const wrapper = shallow(galleryNav);
    expect(wrapper.find('StackNavigator').at(0)).toExist();
  });

  it('stack navigator has 5 navigation screens', () => {
    const count = [0, 1, 2, 3, 4];
    const wrapper = shallow(galleryNav);
    count.forEach((number) => {
      expect(wrapper.find('Screen').at(number)).toExist();
    });
  });

  it('stack navigator has only 5 navigation screens', () => {
    const wrapper = shallow(galleryNav);
    expect(wrapper.find('Screen').at(5).exists()).toBe(false);
  });

  it('screen 1 has text Gallery', () => {
    const wrapper = shallow(galleryNav);
    expect(wrapper.find('Screen').first().props().name).toBe('Gallery');
  });

  it('screen 2 has text Forrest', () => {
    const wrapper = shallow(galleryNav);
    expect(wrapper.find('Screen').at(1).props().name).toBe('Mountains');
  });

  it('screen 3 has text Beach', () => {
    const wrapper = shallow(galleryNav);
    expect(wrapper.find('Screen').at(2).props().name).toBe('Forrest');
  });

  it('screen 4 has text City', () => {
    const wrapper = shallow(galleryNav);
    expect(wrapper.find('Screen').at(3).props().name).toBe('Beach');
  });

  it('screen 5 has text Mountains', () => {
    const wrapper = shallow(galleryNav);
    expect(wrapper.find('Screen').last().props().name).toBe('City');
  });

  test.todo('should render a <Forrest > component when you press Forrest');
  test.todo('should render a <Beach > component when you press Beach');
  test.todo('should render a <City > component when you press City');
  test.todo('should render a <Mountains > component when you press Mountains');
});
