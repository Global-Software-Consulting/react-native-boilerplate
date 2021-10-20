import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import React from 'react';
import { useSelector } from 'react-redux';

export const useStyle = () => {
    const { colors } = useTheme();
    const isDark = useSelector((state) => state.theme.isDark);
    console.log('isDarkisDark', isDark);

    const styles = () =>
        StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.background,
            },
            title: {
                fontWeight: 'bold',
                color: colors.primary,
            },
        });
    return React.useMemo(() => styles(), [isDark]);
};
