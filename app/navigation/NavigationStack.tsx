import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ILoginState } from 'app/models/reducers/login';
import ForgotPassword from 'app/screens/ForgotPassword';
import Home from 'app/screens/Home';
import Login from 'app/screens/Login';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

import ThemeController from '../components/ThemeController';
import { navigationRef } from './NavigationService';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const LoggedInStack = createNativeStackNavigator();

const homeOptions = {
    title: 'Home',

    headerRight: () => <ThemeController />,
};

interface IState {
    loginReducer: ILoginState;
}

const AuthNavigator = () => {
    const isLoggedIn = useSelector((state: IState) => state.loginReducer.isLoggedIn);
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    // When logging out, a pop animation feels intuitive
                    // You can remove this if you want the default 'push' animation
                    animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
                }}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{
                    // When logging out, a pop animation feels intuitive
                    // You can remove this if you want the default 'push' animation
                    animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
                }}
            />
        </AuthStack.Navigator>
    );
};

const LoggedInNavigator = () => (
    <LoggedInStack.Navigator>
        <Stack.Screen name="Home" component={Home} options={homeOptions} />
    </LoggedInStack.Navigator>
);

const App: React.FC = () => {
    const isLoggedIn = useSelector((state: IState) => state.loginReducer.isLoggedIn);

    return (
        <NavigationContainer ref={navigationRef}>
            <StatusBar />

            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {isLoggedIn ? (
                    <Stack.Screen name="Home" component={LoggedInNavigator} options={homeOptions} />
                ) : (
                    <Stack.Screen
                        name="Login"
                        component={AuthNavigator}
                        options={{
                            // When logging out, a pop animation feels intuitive
                            // You can remove this if you want the default 'push' animation
                            animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
                            headerRight: () => <ThemeController />,
                        }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
