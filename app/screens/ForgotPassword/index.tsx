import StdButton from 'app/components/StandardButton';
import NavigationService from 'app/navigation/NavigationService';
import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useStyle } from './styles';
import { useTranslation } from 'react-i18next';

const ForgotPassword: React.FC = () => {
    const goBack = () => NavigationService.goBack();
    const { t } = useTranslation();
    const theme = useTheme();
    const styles = useStyle();
    return (
        <View style={styles.container}>
            <StdButton
                title={t('Back')}
                onPress={goBack}
                icon="keyboard-backspace"
                iconColor={theme.colors.background === 'white' ? 'white' : 'black'}
            />
        </View>
    );
};

export default ForgotPassword;
