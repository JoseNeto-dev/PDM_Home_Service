import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { globalTheme } from '../../global/styles/themes'; // ajuste o caminho conforme necessário
import {styles} from './styles'



export function ButtonVoltar() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <TouchableOpacity onPress={handleGoBack}>
      <AntDesign name="arrowleft" style= {styles.buttonVoltar} />
    </TouchableOpacity>
  );
}

