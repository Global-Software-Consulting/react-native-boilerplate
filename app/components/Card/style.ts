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
            containerE: {},
            containerU: { transform: [{ scaleX: -1 }] },
            left: { left: 0, position: 'absolute' },
            right: { right: 0, position: 'absolute' }
            
        });
    return React.useMemo(() => styles(), [isDark]);
};
