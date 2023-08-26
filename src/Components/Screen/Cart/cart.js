import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import CartItem from '../../Common/CartItem';
import {addItemToWishlist, removeItemToCart} from '../../../Redux/Action/Action';

const Cart = () => {
  const cartData = useSelector(state => state.Cartreducer);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={cartData}
        renderItem={({item, index}) => {
          return (
            <CartItem
              item={item}
              onAddWishlist={(x)=>{
                dispatch(addItemToWishlist(x))
              }}
              onRemoveToCart={() => {
                dispatch(removeItemToCart(index))
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Cart;
