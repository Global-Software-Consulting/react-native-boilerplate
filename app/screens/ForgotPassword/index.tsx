import StdButton from 'app/components/StandardButton';
import NavigationService from 'app/navigation/NavigationService';
import { useTheme } from 'react-native-paper';
import React from 'react';
import { View } from 'react-native';
import { useStyle } from './styles';

const Home: React.FC = () => {
    const goBack = () => NavigationService.goBack();
    const theme = useTheme();
    const styles = useStyle();
    return (
        <View style={styles.container}>
            <StdButton
                title="Navigate Back"
                onPress={goBack}
                icon="keyboard-backspace"
                iconColor={theme.colors.background === 'white' ? 'white' : 'black'}
            />
        </View>
    );
};

export default Home;
