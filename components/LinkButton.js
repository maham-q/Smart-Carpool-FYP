import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const LinkButton = ({ text, onPress, style }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.linkText, style]}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  linkText: {
    fontSize: 14,
    color: '#4A56E2',
    fontWeight: '600',
  },
});

export default LinkButton;
