import React from 'react';
import { View, Text } from 'react-native';
import { useStyle } from './styles';
import { useTranslation } from 'react-i18next';

const Profile: React.FC = () => {
    const styles = useStyle();
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('Hello! Im Profile screen')}</Text>
        </View>
    );
};

export default Profile;
