import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export interface IButtonProps {
  children?: string;
  compact?: boolean;
  glyph?: string;
  option?: string;
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({ children, compact, onClick }) => {
  const styles = StyleSheet.create({
    buttonText: {
      fontSize: 14,
      lineHeight: 19.6,
      color: '#32363a',
      fontWeight: '400',
    },
    button: {
      paddingHorizontal: 9,
      textVerticalAlign: 'middle',
      whiteSpace: 'nowrap',
      borderRadius: 4,
      height: compact ? 26 : 36,
      borderStyle: 'solid',
      borderWidth: 1,
      color: '#0854a0',
      borderColor: '#0854a0',
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
  });

  return (
    <TouchableOpacity onPress={onClick} style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
