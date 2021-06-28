import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View } from 'react-native';

const DetailsScreen: React.FC<{ navigation: any }> = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
};

export default DetailsScreen;
