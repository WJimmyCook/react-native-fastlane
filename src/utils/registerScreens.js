import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import HomeScreen from '../screens/Home';
import Settings from '../screens/Settings';

const Screens = new Map();

Screens.set('boilerplate.Home', HomeScreen);
Screens.set('boilerplate.Settings', Settings);

// Register screens
export default () => {
  Screens.forEach((C, key) => {
    Navigation.registerComponent(
      key,
      () => gestureHandlerRootHOC(C),
      () => C,
    );
  });
};
