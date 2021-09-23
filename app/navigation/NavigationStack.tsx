import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginState } from 'app/models/reducers/login';
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
    headerRight: () => <ThemeController />,
};

interface IState {
    loginReducer: LoginState;
}

const AuthNavigator = () => {
    const isLoggedIn = useSelector((state: IState) => state.loginReducer.isLoggedIn);
    return (
        <AuthStack.Navigator>
            <Stack.Screen
                name="Login"
                screenOptions={homeOptions}
                component={Login}
                options={{
                    // When logging out, a pop animation feels intuitive
                    // You can remove this if you want the default 'push' animation
                    animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
                    headerRight: (props) => <ThemeController {...props} />,
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

            {isLoggedIn ? <LoggedInNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
};

export default App;