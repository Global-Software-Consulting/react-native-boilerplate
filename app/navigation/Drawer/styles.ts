import { StyleSheet } from 'react-native';
import { RootState } from 'app/store/slice';
import React from 'react';
import { useSelector } from 'react-redux';

export const useStyle = () => {
    const isDark = useSelector((state: RootState) => state.theme.isDark);

    const styles = () =>
        StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            },
            labelStyle: {
                fontSize: 12,
                marginBottom: 12,
            },
            drawerContent: {
                flex: 1,
                backgroundColor: isDark ? 'black' : 'white',
            },
            userInfoSection: {
                paddingLeft: 20,
                backgroundColor: isDark ? 'black' : 'white',
            },
            title: {
                marginTop: 20,
                fontWeight: 'bold',
            },
            text: {
                marginTop: 16,
                fontWeight: 'bold',
                flexDirection: 'row',
                // textAlign:'flex',
            },
            chekboxtext: {
                // marginTop: 5,
                fontWeight: 'bold',
                margin: 8,
            },
            caption: {
                fontSize: 14,
                lineHeight: 14,
            },
            row: {
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center',
            },
            col: {
                marginTop: 20,
                flexDirection: 'column',
                alignItems: 'center',
            },
            section: {
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 15,
            },
            paragraph: {
                fontWeight: 'bold',
                marginRight: 3,
            },
            drawerSection: {
                marginTop: 15,
            },
            preference: {
                padding: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 16,
                paddingHorizontal: 16,
            },
            button: {
                // backgroundColor: '#f8f8ff',
                padding: 10,
                borderRadius: 10,
                margin: 10,
                flexDirection: 'row',
            },
            listbutton: {
                // backgroundColor: ,
                padding: 5,
                borderRadius: 10,
                margin: 2,
                flexDirection: 'row',
            },
        });
    return React.useMemo(() => styles(), [isDark]);
};
