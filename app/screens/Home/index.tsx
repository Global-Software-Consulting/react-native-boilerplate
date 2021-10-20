import React from 'react';
import { View, Text } from 'react-native';
import { useStyle } from './styles';
const Home: React.FC = () => {
    const styles = useStyle();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello! I'm Home screen</Text>
        </View>
    );
};

export default Home;
