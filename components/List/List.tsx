import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

type TListProps = {
  data: any;
  renderItem: ({ item }: { item: any }) => React.ReactElement;
};

const List: React.FC<TListProps> = ({ data, renderItem }) => (
  <FlatList style={styles.container} data={data} renderItem={renderItem} />
);

export default List;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
