import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, List, ListItem } from './components';
import { useState, useCallback, useLayoutEffect } from 'react';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState<{ title: string }[]>([
    {
      title: 'First Item',
    },
    {
      title: 'Second Item',
    },
    {
      title: 'Third Item',
    },
  ]);

  const onAddPress = useCallback(() => {
    setData([
      ...data,
      {
        title: 'New value',
      },
    ]);
  }, [data]);

  const onItemPress = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

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

  const renderItem = ({ item }) => <ListItem text={item.title} onClick={onItemPress} />;

  return (
    <View style={styles.container}>
      <List data={data} renderItem={renderItem} />
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
