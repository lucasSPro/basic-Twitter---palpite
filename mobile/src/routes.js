import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Login from './pages/Login/index';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
  }),
);

export default Routes;
