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
        accent: '#000000',
        background: '#000000',
    },
};
export default theme;
