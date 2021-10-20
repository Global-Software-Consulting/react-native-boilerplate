import StdButton from 'app/components/StandardButton/index';
import NavigationService from 'app/navigation/NavigationService';
import * as loginActions from 'app/store/actions/loginActions';
import React, { useEffect, useState } from 'react';
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useStyle } from './styles';
import { useTheme } from 'react-native-paper';
import { transform } from '@babel/core';
const Login: React.FC = () => {
    // const id = useSelector((state: RootState) => state.user.id);
    const dispatch = useDispatch();
    const styles = useStyle();
    const theme = useTheme();
    const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));
    const onForgot = () => NavigationService.navigate('ForgotPassword');
    const rotation = new Animated.Value(0);
    const rotationValue = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });
    const opacityValue = new Animated.Value(0);

    const [showText, setShowText] = useState(false);
    useEffect(() => {
        Animated.timing(rotation, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: true,
        }).start();
        setTimeout(() => {
            Animated.spring(opacityValue, {
                toValue: 1,
                useNativeDriver: true,
            }).start();
        }, 5000);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.imageStyle}>
                <Animated.Image
                    source={require('app/assets/react-native.png')}
                    style={{ transform: [{ rotate: rotationValue }] }}
                />
            </View>
            <Animated.Text
                style={{
                    fontSize: 20,
                    color: 'teal',
                    fontWeight: 'bold',
                    opacity: opacityValue,
                }}>
                GSoft Boiler Plate
            </Animated.Text>
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
