import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CartItem from '../../Common/CartItem';
import {addItemToCart, removeItemToWishlist} from '../../../Redux/Action/Action';

const Cart = () => {
  const cartData = useSelector(state => state.WishlistReducer);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
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
              onAddToCart={(x) => {
                dispatch(addItemToCart(x));
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Cart;
