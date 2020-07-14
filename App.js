import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { View } from 'react-native';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
  },
  {
    
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'DiarioAdiario App',
    },
    headerLayoutPreset: 'center'
  },
);

const AppContainer = createAppContainer(AppNavigator)
export default AppContainer;

