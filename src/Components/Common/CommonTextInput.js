import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {spacing} from '../../Styles/spacing';

const CommonTextInput = ({value, onChangeText, placeholder, icon, type}) => {
  return (
    <View style={styles.textInputContainer}>
      <Image source={icon} style={styles.textInputImage} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor='#000'
        value={value}
        onChangeText={txt => {
          onChangeText(txt);
        }}
        secureTextEntry={type ? true : false}
        style={{marginLeft: spacing.MARGIN_10,color:'#000'}}
      />
    </View>
  );
};

export default CommonTextInput;

const styles = StyleSheet.create({
  textInputContainer: {
    width: '85%',
    height: spacing.HEIGHT_56,
    borderRadius: spacing.RADIUS_10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: spacing.PADDING_20,
    paddingRight: spacing.PADDING_20,
    borderWidth: 1,
    marginTop: spacing.MARGIN_34,
  },
  textInputImage: {
    width: spacing.WIDTH_22,
    height: spacing.HEIGHT_24,
  },
});
