import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import styles from './style';
const CommonInput = ({ label, value, onChangeText, placeholder }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

export default CommonInput;
