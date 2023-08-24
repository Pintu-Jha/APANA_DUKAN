import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {spacing} from '../../Styles/spacing';
import {create} from 'react-test-renderer';

const Commonbotton = ({textColor, bgColor, title, onPress}) => {
  return (
    <TouchableOpacity
      style={{...styles.commonBtnContainer, backgroundColor: bgColor}}
      onPress={() => {
        onPress();
      }}>
      <Text style={{color: textColor}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Commonbotton;

const styles = StyleSheet.create({
  commonBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    height: spacing.HEIGHT_50,
    borderRadius: spacing.RADIUS_12,
    alignSelf: 'center',
    marginTop: spacing.MARGIN_50,
  },
});
