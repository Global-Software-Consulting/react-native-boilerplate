import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/slice';
export const useStyle = () => {
    const theme = useTheme();
    const isDark = useSelector((state: RootState) => state.theme.isDark);
    const styles = () =>
        StyleSheet.create({
            view: {
                backgroundColor: 'teal',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 15,
                borderRadius: 15,
                flexDirection: 'row',
            },
            icon: { paddingRight: 10 },
            text: {
                color: theme.colors.primary,
            },
        });
    return React.useMemo(() => styles(), [isDark]);
};
