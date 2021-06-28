import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export interface IFormInputProps {
  placeholder?: string;
  value?: string;
}

const testIsEmpty = (value?: string | undefined) => value === undefined || value?.length === 0;

const FormInput: React.FC<IFormInputProps> = ({ placeholder, value }) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(testIsEmpty(value));

  const styles = StyleSheet.create({
    input: {
      backgroundColor: 'white',
      borderColor: 'rgb(137, 145, 154)',
      borderWidth: 1,
      marginVertical: 4,
      fontSize: 14,
      lineHeight: 19.6,
      color: '#32363a',
      fontFamily: '"72", "72full", Arial, Helvetica, sans-serif',
      fontWeight: '400',
      height: 36,
      paddingHorizontal: 10,
      minWidth: 44,
      fontStyle: isEmpty ? 'italic' : 'normal',
    },
  });

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={(event) => setIsEmpty(testIsEmpty(event))}
    />
  );
};

export default FormInput;
