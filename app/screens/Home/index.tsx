import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/slice/userSlice';
import { useStyle } from './styles';
const Home: React.FC = () => {
    const dispatch = useDispatch();
    const onLogout = () => dispatch(loginActions.logOut());
    const styles = useStyle();
    return (
        <View style={styles.container}>
            <Button icon="logout" mode="outlined" onPress={onLogout}>
                Logout
            </Button>
        </View>
    );
};

export default Home;
