/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from 'app/EntryPoint';
import {enableScreens} from 'react-native-screens';
import './app/languages/index';
import {name as appName} from './app.json';

enableScreens();

AppRegistry.registerComponent(appName, () => App);
