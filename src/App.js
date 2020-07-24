import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

export const startApp = () => {
  Promise.all([
    Icon.getImageSource('ios-home', 25),
    Icon.getImageSource('ios-settings', 25),
  ]).then(([homeIcon, settingsIcon]) => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          options: {
            bottomTabs: {
              titleDisplayMode: 'alwaysShow',
            },
          },
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'boilerplate.Home',
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    text: 'Home',
                    icon: homeIcon,
                    iconColor: 'grey',
                    selectedIconColor: 'black',
                    testID: 'HOME_BUTTON',
                  },
                },
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'boilerplate.Settings',
                      options: {
                        topBar: {
                          visible: true,
                          title: {
                            text: 'Settings',
                          },
                        },
                      },
                    },
                  },
                ],
                options: {
                  bottomTab: {
                    text: 'Settings',
                    icon: settingsIcon,
                    iconColor: 'grey',
                    selectedIconColor: 'black',
                    testID: 'SETTINGS_BUTTON',
                  },
                },
              },
            },
          ],
        },
      },
    });
  });
};
