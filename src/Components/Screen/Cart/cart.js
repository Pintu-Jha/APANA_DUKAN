import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CartItem from '../../Common/CartItem';
import {
  addItemToWishlist,
  removeItemToCart,
} from '../../../Redux/Action/Action';
import colors from '../../../Utility/colors';
import Commonbotton from '../../Common/Commonbotton';
import { APP_PADDING_HORIZONTAL } from '../../../Styles/commonStyle';
import { textScale } from '../../../Styles/responsiveStyles';

const Cart = () => {
  const cartData = useSelector(state => state.Cartreducer);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({item, index}) => {
            return (
              <CartItem
                item={item}
                onAddWishlist={x => {
                  dispatch(addItemToWishlist(x));
                }}
                onRemoveToCart={() => {
                  dispatch(removeItemToCart(index));
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
            No Item Added In Cart
          </Text>
        </View>
      )}
      {cartData.length > 0 ? (
       <View style={{marginVertical:APP_PADDING_HORIZONTAL}}>
       <Commonbotton
          bgColor={colors.red600}
          textColor={'#fff'}
          title={'Checkout'}
          onPress={()=>{}}
          commonBtnContainer={{width:"90%"}}
        />
       </View>
      ) : null}
    </View>
  );
};

export default Cart;
