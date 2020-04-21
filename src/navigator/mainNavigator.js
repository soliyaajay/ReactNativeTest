import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator } from 'react-navigation-drawer';

import FirstScreen from '../screen/FirstScreen';
import DetailScreen from '../screen/DetailScreen';
// import SignUpStepTwo from '../screen/SignUpStepTwo';
// import SignIn from '../screen/SignIn';
// import Home from '../screen/Home';
// import Chat from '../screen/Chat';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  FirstScreen: {
    screen: FirstScreen,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },

  DetailScreen: {
    screen: DetailScreen,
    navigationOptions: {
      gesturesEnabled: false,
    },
  },

  /** new navigators can be added here */
};
const MainNavigator = createStackNavigator(
  // const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    // contentComponent: SideMenu,
    initialRouteName: 'FirstScreen',
    headerMode: 'none',
  },

);

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;
