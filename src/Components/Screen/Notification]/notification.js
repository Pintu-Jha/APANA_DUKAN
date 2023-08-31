import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CartItem from '../../Common/CartItem';
import {
  addItemToCart,
  removeItemToWishlist,
} from '../../../Redux/Action/Action';
import colors from '../../../Utility/colors';
import { textScale } from '../../../Styles/responsiveStyles';

const Cart = () => {
  const cartData = useSelector(state => state.WishlistReducer);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({item, index}) => {
            return (
              <CartItem
                isWishlist={'true'}
                item={item}
                onRemoveToWishlist={() => {
                  dispatch(removeItemToWishlist(index));
                }}
                onAddToCart={x => {
                  dispatch(addItemToCart(x));
                }}
              />
            );
          }}
        />
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: textScale(15),
              fontWeight: 'bold',
              color: colors.black,
            }}>
            No Item Added In Wishlist
          </Text>
        </View>
      )}
    </View>
  );
};

export default Cart;
