import React from 'react';
import {Text, StyleSheet} from 'react-native';
import colors from '../../Utility/colors';

const RegularText = props => {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {props.children}
    </Text>
  );
};

RegularText.prototype = {
  style: 'Object',
};

RegularText.defaultProps = {
  children: '',
};

const styles = StyleSheet.create({
  text: {
    color: colors.grey900,
  },
});

export default RegularText;
