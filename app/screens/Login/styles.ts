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
            subContainer: {
                backgroundColor: colors.background,
                borderRadius: 20,
                alignItems: 'center',
                borderWidth: 2,
                padding: 20,
                borderColor: isDark ? 'teal' : 'black',
            },
            login: {
                padding: 8,
            },
            forgot: {
                marginTop: 5,
            },
            labelStyle: {
                padding: 10,
                fontSize: 15,
                color: isDark ? 'teal' : 'black',
            },
        });
    return React.useMemo(() => styles(), [isDark]);
};
