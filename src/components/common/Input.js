import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder }) => {
  const { labelStyle, inputStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
        <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1

  },
  inputStyle: {
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 20,
    flex: 2
  },
  containerStyle: {
    height: 40,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  }
};

export { Input };
