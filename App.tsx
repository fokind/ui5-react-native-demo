import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './components';
import { useState, useCallback, useLayoutEffect } from 'react';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState<string[]>(['1', '2']);

  const onAddPress = useCallback(() => {
    setData([...data, 'new value']);
  }, [data]);

  useLayoutEffect(
    () =>
      navigation.setOptions({
        headerRight: () => (
          <View style={styles.actionBar}>
            <Button onClick={onAddPress}>Добавить</Button>
          </View>
        ),
      }),
    [navigation, onAddPress]
  );

  return (
    <View style={styles.container}>
      {data.map((e, i) => (
        <Text key={i}>{e}</Text>
      ))}
      <StatusBar style="auto" />
    </View>
  );
};

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
};

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBar: {
    marginRight: 16,
  },
});
