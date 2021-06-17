import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export interface IButtonProps {
  children?: string;
  glyph?: string;
  option?: string;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 14,
    lineHeight: 19.6,
    color: '#32363a',
    fontWeight: '400',
  },
  button: {
    paddingHorizontal: 9,
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    borderRadius: 4,
    height: 36,
    borderStyle: 'solid',
    borderWidth: 1,
    color: '#0854a0',
    borderColor: '#0854a0',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default Button;
