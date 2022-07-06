import { ImageProps } from 'react-native';

export interface Props {
    title?: string;
    icon?: string;
    iconColor?: string;
    image?: ImageProps;
    withActivityIndicator?: boolean;
    onPress: () => void;
}
