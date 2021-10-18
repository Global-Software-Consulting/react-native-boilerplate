import React from 'react';
import { Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';
import { useStyle } from './style';
import { Props } from './types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const StdButton: React.FC<Props> = (props) => {
    const styles = useStyle();
    return (
        <TouchableOpacity style={styles.view} onPress={props.onPress}>
            {props.icon && (
                <Icon
                    style={styles.icon}
                    name={props.icon}
                    size={24}
                    color={props.iconColor ? props.iconColor : 'black'}
                />
            )}
            {props.image && <Image source={props.image} />}
            <Text style={styles.text}>{props.title}</Text>
            {props.withActivityIndicator && <ActivityIndicator />}
        </TouchableOpacity>
    );
};
export default StdButton;
