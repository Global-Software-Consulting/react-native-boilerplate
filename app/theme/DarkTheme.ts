import { DarkTheme as PaperDarkTheme } from 'react-native-paper';

const darkTheme = {
    ...PaperDarkTheme,
    colors: {
        ...PaperDarkTheme.colors,
        primary: 'white',
        accent: 'black',
        background: 'black',
    },
};

export default darkTheme;
