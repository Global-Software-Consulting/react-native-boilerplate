import React from 'react';
import { Text, View } from 'react-native';
import { useStyle } from './styles';
import { useTranslation } from 'react-i18next';

const Chat: React.FC = () => {
    const styles = useStyle();
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('Hello! Im Chat screen')}</Text>
        </View>
    );
};

export default Chat;
