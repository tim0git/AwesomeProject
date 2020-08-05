import 'react-native';
import React from 'react';
import 'jest-enzyme';
import 'react-native-mock-render/mock';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../App';

// import Hello from '../components/Hello';
// import Details from '../components/Details';
// import GalleryNav from '../components/GalleryNav';

describe('<App >', () => {
  const app = <App />;

  it('Component Renders', () => {
    const component = shallow(app);
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('has a bottom nav bar', () => {
    const wrapper = shallow(app);
    expect(wrapper.find('BottomTabNavigator').at(0)).toExist();
  });

  it('bottom nav bar has 3 navigation screens', () => {
    const count = [0, 1, 2];
    const wrapper = shallow(app);
    count.forEach((number) => {
      expect(wrapper.find('Screen').at(number)).toExist();
    });
  });

  it('bottom nav bar has only 3 navigation screens', () => {
    const wrapper = shallow(app);
    expect(wrapper.find('Screen').at(3).exists()).toBe(false);
  });

  it('first screen has text Home', () => {
    const wrapper = shallow(app);
    expect(wrapper.find('Screen').first().props().name).toBe('Home');
  });

  it('index 1 (middle) screen has text Image Gallery', () => {
    const wrapper = shallow(app);
    expect(wrapper.find('Screen').at(1).props().name).toBe('Image Gallery');
  });

  it('last screen has text Details', () => {
    const wrapper = shallow(app);
    expect(wrapper.find('Screen').last().props().name).toBe('Details');
  });

  test.todo(
    'should render a <Hello > component when you press Hello on the nav bar',
  );
  test.todo(
    'should render a <ImageGallery > component when you press Image Gallery on the nav bar',
  );
  test.todo(
    'should render a <Details > component when you press Details on the nav bar',
  );
});
