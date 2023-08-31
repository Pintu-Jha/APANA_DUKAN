import {View, Text, StyleSheet, Image, TextInput, Alert} from 'react-native';
import React from 'react';
import colors from '../../Utility/colors';
import commonStyle, { APP_PADDING_HORIZONTAL } from '../../Styles/commonStyle';
import {spacing} from '../../Styles/spacing';
import {textScale} from '../../Styles/responsiveStyles';
import { Images } from '../../Utility/imgPath';

const CommonSearchBar = ({
  backGroundColor,
  textInput,
  BorderColor
}) => {
  return (
    <View>
      <View
        style={[
          Styles.mainContainer,
          {
            backgroundColor: backGroundColor || colors.white , borderColor: BorderColor || colors.grey300
          },
        ]}>
        <Image
          source={Images.IMG_SEARCH}
          resizeMode={'contain'}
          style={Styles.searchIcon}
        />
        <View style={{flex: 1,marginLeft:spacing.MARGIN_6}}>
          <Text style={[Styles.textInputStyle, {color: textInput || colors.black}]}>
            Search
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CommonSearchBar;

const Styles = StyleSheet.create({
  mainContainer: {
    ...commonStyle.flexRow,
    borderRadius: spacing.RADIUS_12,
    marginHorizontal: APP_PADDING_HORIZONTAL,
    padding: spacing.PADDING_5,
    backgroundColor: colors.white,
    borderWidth:1,
    borderColor:colors.grey300,
    marginVertical:APP_PADDING_HORIZONTAL
    // elevation: 10,
  },
  searchIcon: {
    width: spacing.WIDTH_28,
    height: spacing.WIDTH_28,
    tintColor: colors.black,
  },
  textInputStyle: {
    fontSize: textScale(10),
    paddingVertical: spacing.PADDING_5,
  },
});
