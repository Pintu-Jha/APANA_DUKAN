import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { textScale } from '../../Styles/responsiveStyles';
import colors from '../../Utility/colors';
import { APP_PADDING_HORIZONTAL } from '../../Styles/commonStyle';

const ProductListHeaderText = ({title}) => {
  return (
    <View>
      <Text style={styles.itemHeaderContainer}>{title}</Text>
    </View>
  );
};

export default ProductListHeaderText;

const styles = StyleSheet.create({
  itemHeaderContainer: {
    fontSize: textScale(16),
    color: colors.black,
    fontWeight: 'bold',
    marginLeft: APP_PADDING_HORIZONTAL,
  },
});
