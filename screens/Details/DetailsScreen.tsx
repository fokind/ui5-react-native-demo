import 'react-native-gesture-handler';
import * as React from 'react';
import { View } from 'react-native';
import { FormInput } from '../../components';

const DetailsScreen: React.FC<{ navigation: any }> = () => {
  return (
    <View style={{ paddingHorizontal: 4 }}>
      <FormInput placeholder="Default" />
    </View>
  );
};

export default DetailsScreen;
