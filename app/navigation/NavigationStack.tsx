import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from 'app/screens/ForgotPassword';
import Login from 'app/screens/Login';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/slice/';
import ThemeController from '../components/ThemeController';
import { navigationRef } from './NavigationService';
import BottomTabNavigation from './BottomTabNavigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

import Drawer from './Drawer';
const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const AppDrawer = createDrawerNavigator();

const homeOptions = {
    headerRight: () => <ThemeController />,
};

const AuthNavigator = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme.colors.accent,
                },
                headerTintColor: theme.colors.primary,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
            }}>
            <Stack.Screen
                name={t('Login')}
                screenOptions={homeOptions}
                component={Login}
                options={{
                    // When logging out, a pop animation feels intuitive
                    // You can remove this if you want the default 'push' animation
                    animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
                    headerRight: (props) => <ThemeController {...props} />,
                    headerStyle: {
                        backgroundColor: theme.colors.accent,
                    },
                }}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{
                    // When logging out, a pop animation feels intuitive
                    // You can remove this if you want the default 'push' animation
                    animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
                    headerStyle: {
                        backgroundColor: theme.colors.accent,
                    },
                }}
            />
        </AuthStack.Navigator>
    );
};

const LoggedInNavigator = () => {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <AppDrawer.Navigator drawerContent={() => <Drawer />}>
            <AppDrawer.Screen
                name={t('Home')}
                component={BottomTabNavigation}
                options={{
                    drawerLabel: 'Gsoft Boiler Plate',
                    headerStyle: {
                        backgroundColor: theme.colors.accent, //Set Header color
                    },
                    headerTintColor: theme.colors.primary, //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </AppDrawer.Navigator>
    );
};
const App: React.FC = () => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    return (
        <NavigationContainer ref={navigationRef}>
            <StatusBar />

            {isLoggedIn ? <LoggedInNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
};

export default App;
