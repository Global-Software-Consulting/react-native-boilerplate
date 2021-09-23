import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import NavigationService from 'app/navigation/NavigationService';

import { useStyle } from './styles';
const Home: React.FC = () => {
    const goBack = () => NavigationService.goBack();
    const styles = useStyle();
    return (
        <View style={styles.container}>
            <Button icon="keyboard-backspace" mode="outlined" onPress={goBack}>
                Go Back
            </Button>
        </View>
    );
};

export default Home;
