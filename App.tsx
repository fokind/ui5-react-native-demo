import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ActionBar, Button } from './components';

export default function App() {
  return (
    <>
      <ActionBar
        actions={
          <>
            <Button>Button</Button>
          </>
        }
        title="Page Title"
      />
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button>Кнопка</Button>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
