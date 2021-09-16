/**
 * React Native App
 * Everything starts from the Entry-point
 */
import {
    CombinedDarkTheme,
    CombinedDefaultTheme,
    PaperThemeDark,
    PaperThemeDefault,
} from 'app/config/theme-config';
import { IThemeState } from 'app/models/reducers/theme';
import Navigator from 'app/navigation';
import configureStore from 'app/store';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

const { persistor, store } = configureStore();

interface IState {
    themeReducer: IThemeState;
}

const RootNavigation: React.FC = () => {
    const isDark = useSelector((state: IState) => state.themeReducer.isDark);
    const paperTheme = isDark ? PaperThemeDark : PaperThemeDefault;
    const combinedTheme = isDark ? CombinedDarkTheme : CombinedDefaultTheme;

    return (
        <PaperProvider theme={paperTheme}>
            <Navigator theme={combinedTheme} />
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
