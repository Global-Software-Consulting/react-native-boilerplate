import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/store/actions/loginActions';
import { useStyle } from './styles';

import NavigationService from 'app/navigation/NavigationService';
import { RootState } from 'app/store/slice/';

const Login: React.FC = () => {
    const id = useSelector((state: RootState) => state.user.id);
    const dispatch = useDispatch();
    const styles = useStyle();
    const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
    const onForgot = () => NavigationService.navigate('ForgotPassword');
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.login}>Login Status : {id}</Text>
                <Button icon="login" mode="outlined" onPress={onLogin}>
                    Login
                </Button>
                <Button
                    mode="text"
                    style={styles.forgot}
                    labelStyle={styles.labelStyle}
                    onPress={onForgot}>
                    Forgot Password
                </Button>
            </View>
        </View>
    );
};

export default Login;
