import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {spacing} from '../../Styles/spacing';
import {textScale} from '../../Styles/responsiveStyles';
import colors from '../../Utility/colors';
import {Images} from '../../Utility/imgPath';
import commonStyle, { APP_PADDING_HORIZONTAL } from '../../Styles/commonStyle';

const ProductListComponentRow = ({item, onAddToCart, onAddWishlist,index}) => {
  return (
    <View style={[styles.mainContainer,index == 0 && {marginLeft:APP_PADDING_HORIZONTAL}]}>
      <Image source={item.image} style={styles.productImg} resizeMode="cover" />
      <Text style={styles.productName}>{item.name}</Text>

      <View style={styles.detailContainer}>
        <Text style={styles.price}>{`₹` + item.price}</Text>
        <TouchableOpacity
          style={styles.addToCartBtnContainer}
          onPress={() => {
            onAddToCart(item);
          }}>
          <Text style={styles.btnText}>add to cart</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.wishListContainer}
        onPress={() => {
          onAddWishlist(item);
        }}>
        <Image source={Images.IMG_NOTIFICATION} style={styles.wishListImg} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductListComponentRow;

const styles = StyleSheet.create({
  mainContainer: {
    width: spacing.WIDTH_240,
    height: spacing.HEIGHT_320,
    borderRadius: spacing.RADIUS_12,
    backgroundColor: '#fff',
    marginRight: APP_PADDING_HORIZONTAL,
    elevation: 5,
    marginBottom: spacing.MARGIN_10,
  },
  productImg: {
    width: '100%',
    height: spacing.HEIGHT_230,
    borderTopLeftRadius: spacing.RADIUS_12,
    borderTopRightRadius: spacing.RADIUS_12,
  },
  productName: {
    fontSize: textScale(15),
    fontWeight: '700',
    marginLeft: spacing.MARGIN_10,
    marginTop: spacing.MARGIN_6,
  },
  detailContainer: {
    ...commonStyle.flexRow,
    justifyContent: 'space-between',
    marginTop: spacing.MARGIN_6,
    paddingLeft: spacing.PADDING_10,
    paddingRight: spacing.PADDING_10,
  },
  price: {
    fontSize: textScale(16),
    color: colors.black,
    fontWeight: '600',
  },
  addToCartBtnContainer: {
    borderWidth: 0.8,
    borderRadius: spacing.RADIUS_8,
    padding: spacing.PADDING_10,
  },
  btnText: {
    fontSize: textScale(10),
    color: colors.black,
    fontWeight: '600',
  },
  wishListContainer: {
    width: spacing.WIDTH_46,
    height: spacing.HEIGHT_46,
    backgroundColor: '#fff',
    borderRadius: spacing.RADIUS_70,
    elevation: 5,
    position: 'absolute',
    top: 10,
    right: 10,
    ...commonStyle.justifyALignCenter,
  },
  wishListImg: {
    width: spacing.WIDTH_30,
    height: spacing.HEIGHT_30,
  },
});
