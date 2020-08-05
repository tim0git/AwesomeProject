import 'react-native';
import React from 'react';
import 'jest-enzyme';
import 'react-native-mock-render/mock';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import SubGallery from '../components/gallery/SubGallery';

describe('<SubGallery >', () => {
  const params = {
    route: {
      name: 'Beach',
    },
  };

  const subGallery = <SubGallery {...params} />;

  it('Component Renders', () => {
    const component = shallow(subGallery);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('Component mounts ', () => {
    const component = mount(subGallery);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('renders the route name passed down on props ', () => {
    const wrapper = shallow(subGallery);
    expect(wrapper.find('Text').at(0).props().children).toBe('Beach');
  });

  it('renders the route name passed down on props ', () => {
    const wrapper = shallow(subGallery);
    expect(wrapper.find('FlatList').at(0).props().numColumns).toBe(2);
  });

  it('data provided to FlatList has type of route.name provided ', () => {
    const wrapper = mount(subGallery);
    for (let i = 0; i < 10; i++) {
      expect(wrapper.find('FlatList').at(0).props().data[i].type).toBe('Beach');
      expect(wrapper.find('FlatList').at(0).props().data[i].type).not.toBe(
        'Forrest',
      );
      expect(wrapper.find('FlatList').at(0).props().data[i].type).not.toBe(
        'City',
      );
      expect(wrapper.find('FlatList').at(0).props().data[i].type).not.toBe(
        'Mountains',
      );
      expect(wrapper.find('FlatList').at(0).props().data[i].type).not.toBe(
        'undefined',
      );
    }
  });

  it('data provided to FlatList has src of type string', () => {
    const wrapper = mount(subGallery);
    for (let i = 0; i < 10; i++) {
      expect(typeof wrapper.find('FlatList').at(0).props().data[i].src).toBe(
        'string',
      );
    }
  });

  it('data provided to FlatList has src string of length greater than 5 characters', () => {
    const wrapper = mount(subGallery);
    for (let i = 0; i < 10; i++) {
      expect(
        wrapper.find('FlatList').at(0).props().data[i].src.length >= 5,
      ).toBe(true);
    }
  });

  it('data provided to FlatList has src string and first 5 char are (https:)', () => {
    const wrapper = mount(subGallery);
    for (let i = 0; i < 10; i++) {
      expect(
        wrapper.find('FlatList').at(0).props().data[i].src.slice(0, 5),
      ).toBe('https');
    }
  });
});
