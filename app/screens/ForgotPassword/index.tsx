import StdButton from 'app/components/StandardButton';
import NavigationService from 'app/navigation/NavigationService';
import React from 'react';
import { View } from 'react-native';
import { useStyle } from './styles';

const Home: React.FC = () => {
    const goBack = () => NavigationService.goBack();
    const styles = useStyle();
    return (
        <View style={styles.container}>
            <StdButton title="Navigate Back" onPress={goBack} />
        </View>
    );
};

export default Home;
