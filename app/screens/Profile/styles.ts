import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import React from 'react';
import { RootState } from 'app/store/slice';
import { useSelector } from 'react-redux';

export const useStyle = () => {
    const { colors } = useTheme();
    const isDark = useSelector((state: RootState) => state.theme.isDark);

    const styles = () =>
        StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: isDark ? 'black' : 'white',
            },
            title: {
                fontWeight: 'bold',
                color: colors.primary,
            },
        });
    return React.useMemo(() => styles(), [isDark]);
};
