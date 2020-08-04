import 'react-native-gesture-handler/jestSetup';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import {configure} from 'enzyme';
// import Adapter from 'enzyme-adapter-preact-pure';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

function suppressDomErrors() {
  const suppressedErrors = /(React does not recognize the.*prop on a DOM element|Unknown event handler property|is using uppercase HTML|Received `true` for a non-boolean attribute `accessible`|The tag.*is unrecognized in this browser|PascalCase)/;
  // eslint-disable-next-line no-console
  console.error = (message) => {
    if (message.match(suppressedErrors)) {
    }
  };
}
suppressDomErrors();

Enzyme.configure({adapter: new Adapter()});
