import React from 'react';
import { Image, Text, Pressable } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useStyle } from './style';
import { Props } from './types';
const StdButton: React.FC<Props> = (props) => {
    const styles = useStyle();
    return (
        <Pressable style={styles.view} onPress={props.onPress}>
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
        </Pressable>
    );
};
export default StdButton;
