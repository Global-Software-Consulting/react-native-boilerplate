/**
 * React Native App
 * Everything starts from the Entry-point
 */

import Navigator from './navigation';
import {persistor, store} from './store';
import {RootState} from './store/slice';
import React, {useEffect} from 'react';
import {ActivityIndicator, LogBox, View, Text} from 'react-native';
import codePush from 'react-native-code-push';
import {Provider as PaperProvider} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import DarkTheme from './theme/DarkTheme';
import DefaultTheme from './theme/DefaultTheme';
import Config from 'react-native-config';
import ErrorBoundary from 'react-native-error-boundary';

const RootNavigation: React.FC = () => {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const theme = isDark ? DarkTheme : DefaultTheme;
  console.log(Config.GOOGLE_MAPS_API_KEY, '<====');

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <PaperProvider theme={theme}>
      <Navigator />
    </PaperProvider>
  );
};
const codePushOptions = {
  updateDialog: false,
  installMode: codePush.InstallMode.IMMEDIATE,
};

const EntryPoint: React.FC = () => {
  useEffect(() => {
    codePush.sync({installMode: codePush.InstallMode.IMMEDIATE});
  });

  const CustomFallback = (props: {error: Error; resetError: Function}) => (
    <View>
      <Text>Something happened!</Text>
      <Text>{props.error.toString()}</Text>
    </View>
  );

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <ErrorBoundary FallbackComponent={CustomFallback}>
          <RootNavigation />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
};
export default codePush(codePushOptions)(EntryPoint);
