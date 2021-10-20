import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useStyle } from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { transform } from '@babel/core';

const AppCard: React.FC = (props) => {
    const styles = useStyle();
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={props.isEnglish ? styles.containerE : styles.containerU}></View>
            <Icon name="eye" style={props.isEnglish ? styles.left : styles.right} size={23} />

            <Text style={props.isEnglish ? styles.left : styles.right}>
                {props.isEnglish ? 'This is english' : 'یہ اردو ہے'}
            </Text>
        </View>
    );
};
export default AppCard;
