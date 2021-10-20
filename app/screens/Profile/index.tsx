import React from 'react';
import { View, Text } from 'react-native';
import { useStyle } from './styles';
const Profile: React.FC = () => {
    const styles = useStyle();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello! I'm Profile screen</Text>
        </View>
    );
};

export default Profile;
