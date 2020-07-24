import { Navigation } from 'react-native-navigation';
import { startApp } from './src/App';
import registerScreens from './src/utils/registerScreens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  startApp();
});
