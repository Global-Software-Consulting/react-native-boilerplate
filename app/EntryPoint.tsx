/**
 * React Native App
 * Everything starts from the Entry-point
 */

import { useEffect } from 'react';
import Navigator from 'app/navigation';
import { persistor, store } from 'app/store';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import DarkTheme from './theme/DarkTheme';
import DefaultTheme from './theme/DefaultTheme';
import SplashScreen from 'react-native-splash-screen';
import { RootState } from 'app/store/slice';
const RootNavigation: React.FC = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark);
    const theme = isDark ? DarkTheme : DefaultTheme;
    useEffect(() => {
        SplashScreen.hide();
    }, []);
    return (
        <PaperProvider theme={theme}>
            <Navigator />
        </PaperProvider>
    );
};

const EntryPoint: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                <RootNavigation />
            </PersistGate>
        </Provider>
    );
};

export default EntryPoint;
