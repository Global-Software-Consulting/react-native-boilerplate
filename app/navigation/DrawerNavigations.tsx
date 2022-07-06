import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import Home from 'screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const DrawerNavigations = () => {
    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator
            defaultStatus="open"
            screenOptions={{
                drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
            }}>
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
};
export default DrawerNavigations;
