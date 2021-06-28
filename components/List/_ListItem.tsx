import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export interface IListItemProps {
  text: string;
  onClick?: () => void;
}

const ListItem: React.FC<IListItemProps> = ({ text, onClick }) => {
  const styles = StyleSheet.create({
    item: {
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(228, 228, 228)',
      height: 44,
      paddingHorizontal: 16,
      display: 'flex',
      paddingLeft: 16,
      justifyContent: 'center',
    },
    text: {
      fontSize: 14,
      lineHeight: 19.6,
      color: '#32363a',
      fontFamily: '"72", "72full", Arial, Helvetica, sans-serif',
      fontWeight: '400',
    },
  });
  return (
    <TouchableOpacity onPress={onClick} style={styles.item}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;
