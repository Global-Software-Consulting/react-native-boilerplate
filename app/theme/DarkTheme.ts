import { DefaultTheme } from 'react-native-paper';
const theme = {
    ...DefaultTheme,
    myOwnProperty: true,
    roundness: 2,
    fonts: {
        ...DefaultTheme.fonts,
        bold: 'arial',
    },

    colors: {
        ...DefaultTheme.colors,
        primary: '#3498db',
        accent: '#f1c40f',
        background: 'white',
    },
};
export default theme;
