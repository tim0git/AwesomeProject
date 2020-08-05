import 'react-native';
import React from 'react';
import 'jest-enzyme';
import 'react-native-mock-render/mock';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

// import App from '../App';
// import Hello from '../components/Hello';
// import Details from '../components/Details';
import Gallery from '../components/gallery/Gallery';

describe('<Gallery >', () => {
  const gallery = <Gallery />;

  it('Component Renders', () => {
    const component = shallow(gallery);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('displays 4 Images', () => {
    const count = [0, 1, 2, 3];
    const wrapper = shallow(gallery);
    count.forEach((number) => {
      expect(wrapper.find('Image').at(number)).toExist();
    });
  });

  it('Image has the id in the order sepcified in the array below.', () => {
    const wrapper = shallow(gallery);
    const imageIds = ['Forrest', 'Beach', 'City', 'Mountains'];
    imageIds.forEach((desc, index) => {
      expect(wrapper.find('Image').at(index).props().id).toBe(desc);
    });
  });

  it('View has the Text in the order sepcified in the array below.', () => {
    const wrapper = shallow(gallery);
    const imageIds = ['Forrest', 'Beach', 'City', 'Mountains'];
    imageIds.forEach((desc, index) => {
      expect(wrapper.find('Text').at(index).props().children).toBe(desc);
    });
  });

  it('Screen only displays 4 Images ', () => {
    const wrapper = shallow(gallery);
    expect(wrapper.find('Images').at(4).exists()).toBe(false);
  });

  it('Screen only displays 4 Text ', () => {
    const wrapper = shallow(gallery);
    expect(wrapper.find('Text').at(4).exists()).toBe(false);
  });

  it.todo('test the onPress funcitonality for each..');
});
