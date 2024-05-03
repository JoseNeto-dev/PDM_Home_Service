import React from 'react';
import { View, Button, ViewStyle, TextStyle, Touchable, TouchableOpacity, Text } from 'react-native';
import { styles } from '../../screens/home/styles';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    containerStyle?: ViewStyle;
    titleStyle?: TextStyle;
}

export function CustomButton({ title, onPress, containerStyle, titleStyle }: CustomButtonProps) {
    return (
        <View style={containerStyle}>
            <TouchableOpacity onPress={onPress}>
                <Text style={titleStyle}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}
