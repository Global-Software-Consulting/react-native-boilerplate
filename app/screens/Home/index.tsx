import StdButton from 'app/components/StandardButton';
import * as loginActions from 'app/store/slice/userSlice';
import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useStyle } from './styles';
import { useTheme } from 'react-native-paper';
const Home: React.FC = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const onLogout = () => dispatch(loginActions.logOut());
    const styles = useStyle();
    return (
        <View style={styles.container}>
            <StdButton
                title="Log out"
                onPress={onLogout}
                icon="logout"
                iconColor={theme.colors.background === 'white' ? 'white' : 'black'}
            />
        </View>
    );
};

export default Home;
