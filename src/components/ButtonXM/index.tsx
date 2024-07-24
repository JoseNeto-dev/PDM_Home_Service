import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { buttonStyles } from './styles';


interface CustomButtonProps {
    title: string;
    onPress: () => void;
    color: string; // Cor de fundo do botão
    textColor: string; // Cor do texto do botão
    borderColor?: string; // Cor da borda do botão (opcional)
    borderWidth?: number; // Largura da borda do botão (opcional)
    
}

export function CustomButton({ title, onPress, color, textColor, borderColor, borderWidth }: CustomButtonProps) {
    return (
        <View style={[buttonStyles.container, { backgroundColor: color, borderColor: borderColor, borderWidth: borderWidth }]}>
            <TouchableOpacity onPress={onPress}>
                <Text style={[buttonStyles.title, { color: textColor }]}>{title}</Text>
            </TouchableOpacity>
        </View>
        
    );
}
