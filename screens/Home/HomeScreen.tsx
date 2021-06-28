import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, List, ListItem } from './../../components';
import { useState, useCallback, useLayoutEffect } from 'react';

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
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

export default HomeScreen;

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
