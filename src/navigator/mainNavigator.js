import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen48871Navigator from '../features/BlankScreen48871/navigator';
import BlankScreen38863Navigator from '../features/BlankScreen38863/navigator';
import BlankScreen28859Navigator from '../features/BlankScreen28859/navigator';
import BlankScreen18858Navigator from '../features/BlankScreen18858/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen48871: { screen: BlankScreen48871Navigator },
BlankScreen38863: { screen: BlankScreen38863Navigator },
BlankScreen28859: { screen: BlankScreen28859Navigator },
BlankScreen18858: { screen: BlankScreen18858Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
