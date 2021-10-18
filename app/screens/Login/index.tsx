import StdButton from 'app/components/StandardButton/index';
import NavigationService from 'app/navigation/NavigationService';
import * as loginActions from 'app/store/actions/loginActions';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useStyle } from './styles';
import { useTheme } from 'react-native-paper';
const Login: React.FC = () => {
    // const id = useSelector((state: RootState) => state.user.id);
    const dispatch = useDispatch();
    const styles = useStyle();
    const theme = useTheme();
    const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
    const onForgot = () => NavigationService.navigate('ForgotPassword');
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <StdButton
                    title="Login"
                    onPress={onLogin}
                    icon="login"
                    iconColor={theme.colors.background === 'white' ? 'white' : 'black'}
                />
                <TouchableOpacity style={styles.forgot} onPress={onForgot}>
                    <Text style={styles.labelStyle}> Forgot Password</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;
