import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Hello from '../components/Hello';

describe('Test React Navigator', () => {
  jest.useFakeTimers();

  it('renders correctly', () => {
    renderer.create(<Hello />);
  });

  test('renders correctly', () => {
    const tree = renderer.create(<Hello />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
