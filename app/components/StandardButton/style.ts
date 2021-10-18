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
                padding: 15,
                borderRadius: 15,
            },
            text: {
                color: theme.colors.background,
            },
        });
    return React.useMemo(() => styles(), [isDark]);
};
