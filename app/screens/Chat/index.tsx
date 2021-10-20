import React from 'react';
import { Text, View } from 'react-native';
import { useStyle } from './styles';
const Chat: React.FC = () => {
    const styles = useStyle();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello! I'm chat screen</Text>
        </View>
    );
};

export default Chat;
