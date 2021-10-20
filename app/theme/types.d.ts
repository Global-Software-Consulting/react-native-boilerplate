import 'react-native-paper';

declare global {
    namespace ReactNativePaper {
        interface ThemeColors {
            background: string;
        }
        interface ThemeFonts {
            bold: string;
        }
        interface Theme {
            myOwnProperty: boolean;
        }
    }
}
