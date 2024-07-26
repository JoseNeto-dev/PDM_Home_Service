import { ActivityIndicator, View } from 'react-native';

import { globalTheme } from '../../global/styles/themes';


export function Loading() {

  return (
    <View style={{ flex: 1,backgroundColor:"black", alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator
        color={globalTheme.COLORS.white}
        size={globalTheme.SIZE.lg}
      />
    </View>
  )
}