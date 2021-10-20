import * as React from 'react';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Profile from '../screens/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarLabel: 'Chat',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chat" color={color} size={size} />
                    ),
                    tabBarBadge: 2,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-circle-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
export default BottomTabNavigation;
