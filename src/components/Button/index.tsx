import React from 'react';
import { View, Button, ViewStyle, TextStyle } from 'react-native';
import { styles } from '../../screens/home/styles';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    containerStyle?: ViewStyle;
    titleStyle?: TextStyle;
}

export function CustomButton({ title, onPress, containerStyle, titleStyle}: CustomButtonProps) {
  return (
    <View style= {containerStyle}>
      <Button title={title} onPress={onPress} titleStyle= {titleStyle}/>
    </View>
  );
}
