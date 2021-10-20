import { RootState } from 'app/store/slice';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export const useStyle = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark);
    const styles = () =>
        StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: isDark ? 'black' : 'white',
            },
            subContainer: {
                marginTop: '10%',
                // backgroundColor: colors.primary,
                borderRadius: 20,
                alignItems: 'center',
                borderWidth: 2,
                padding: 20,
                borderColor: isDark ? 'teal' : 'black',
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
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
