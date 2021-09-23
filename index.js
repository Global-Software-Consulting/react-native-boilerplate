/**
 * @format
 */
import 'react-native-gesture-handler';

import App from 'app/EntryPoint';
import { AppRegistry } from 'react-native';
import { enableScreens } from 'react-native-screens';
import './app/languages/index';
import { name as appName } from './app.json';

enableScreens();

AppRegistry.registerComponent(appName, () => App);
