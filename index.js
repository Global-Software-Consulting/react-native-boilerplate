/**
 * @format
 */
import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import { enableScreens } from 'react-native-screens';

import { name as appName } from './app.json';
import App from './app/Entrypoint';

enableScreens();

AppRegistry.registerComponent(appName, () => App);
