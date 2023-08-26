import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {spacing} from '../../Styles/spacing';
import {textScale} from '../../Styles/responsiveStyles';
import colors from '../../Utility/colors';
import {Images} from '../../Utility/imgPath';
import commonStyle from '../../Styles/commonStyle';

const CartItem = ({
  item,
  onRemoveToCart,
  onAddWishlist,
  isWishlist,
  onRemoveToWishlist,
  onAddToCart,
}) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={item.image} style={styles.productImg} resizeMode="cover" />
      <Text style={styles.productName}>{item.name}</Text>

      <View style={styles.detailContainer}>
        <Text style={styles.price}>{`₹` + item.price}</Text>
        {isWishlist ? (
          <TouchableOpacity
            style={styles.addToCartBtnContainer}
            onPress={() => {
              onAddToCart(item);
            }}>
            <Text style={styles.btnText}>add to cart</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.addToCartBtnContainer}
            onPress={() => {
              onRemoveToCart();
            }}>
            <Text style={styles.btnText}>remove to cart</Text>
          </TouchableOpacity>
        )}
      </View>
      {isWishlist ? (
        <TouchableOpacity
          style={styles.wishListContainer}
          onPress={() => {
            onRemoveToWishlist();
          }}>
          <Image
            source={Images.IMG_NOTIFICATION_FILL}
            style={styles.wishListImg}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.wishListContainer}
          onPress={() => {
            onAddWishlist(item);
          }}>
          <Image source={Images.IMG_NOTIFICATION} style={styles.wishListImg} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  mainContainer: {
    width: '93%',
    height: spacing.HEIGHT_400,
    borderRadius: spacing.RADIUS_12,
    backgroundColor: '#fff',
    elevation: 5,
    marginBottom: spacing.MARGIN_10,
    marginTop: spacing.MARGIN_10,
    alignSelf: 'center',
  },
  productImg: {
    width: '100%',
    height: spacing.HEIGHT_320,
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
    width: spacing.WIDTH_50,
    height: spacing.HEIGHT_50,
    backgroundColor: '#fff',
    borderRadius: spacing.RADIUS_40,
    elevation: 4,
    position: 'absolute',
    top: 10,
    right: 10,
    ...commonStyle.justifyALignCenter,
  },
  wishListImg: {
    width: spacing.WIDTH_30,
    height: spacing.HEIGHT_30,
    tintColor: colors.theme,
  },
});
