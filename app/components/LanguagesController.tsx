import React from 'react';
import { View, StyleSheet } from 'react-native';
//import { useTranslation } from 'react-i18next';

const LanguagesController: React.FC = () => {
    //  const [t] = useTranslation();
    return <View style={styles.container} />;
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 12,
    },
    icon: { marginLeft: 4 },
});

export default LanguagesController;
