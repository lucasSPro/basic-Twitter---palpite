import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import 'react-native-gesture-handler';
import Login from './pages/Login';
import Timeline from './pages/Timeline';
import New from './pages/New';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    App: createStackNavigator(
      {
        Timeline,
        New,
      },
      {
        headerLayoutPreset: 'center',
        defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: '#6A2894',
          },
          headerTintColor: '#fff',
        },
      },
    ),
  }),
);

export default Routes;
