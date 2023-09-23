import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CartItem from '../../Common/CartItem';
import {
  addItemToWishlist,
  addToOrder,
  removeItemToCart,
} from '../../../Redux/Action/Action';
import colors from '../../../Utility/colors';
import Commonbotton from '../../Common/Commonbotton';
import {APP_PADDING_HORIZONTAL} from '../../../Styles/commonStyle';
import {textScale} from '../../../Styles/responsiveStyles';
import RazorpayCheckout from 'react-native-razorpay';
import {Constants} from '../../../Utility/imdex';
import {ADD_TO_ORDER} from '../../../Redux/ActionType';

const Cart = ({navigation}) => {
  const cartData = useSelector(state => state.Cartreducer);
  const dispatch = useDispatch();
  const getTotalPrice = () => {
    let tempTotal = 0;
    cartData.map(item => {
      tempTotal = tempTotal + item.price;
    });
    return tempTotal;
  };

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
        <View style={{marginVertical: APP_PADDING_HORIZONTAL}}>
          <Commonbotton
            bgColor={colors.red600}
            textColor={'#fff'}
            title={'Checkout'}
            onPress={() => {
              var options = {
                description: 'Credits towards consultation',
                image: 'https://i.imgur.com/3g7nmJC.jpg',
                currency: 'INR',
                key: 'rzp_test_DGo8PmLHfBfWC2',
                amount: getTotalPrice() * 100,
                name: 'Pintu',
                order_id: '', //Replace this with an order_id created using Orders API.
                prefill: {
                  email: 'pintujha286@gmail.com',
                  contact: '919351195181',
                  name: 'Pintu jha',
                },
                theme: {color: '#53a20e'},
              };
              RazorpayCheckout.open(options)
                .then(data => {
                  // handle success
                  // dispatch(
                  //   addToOrder({
                  //     item: cartData,
                  //     totalPrice: getTotalPrice(),
                  //   }),
                  // );

                  navigation.navigate(Constants.SCREEN_SUCCESS, {
                    status: 'success',
                  });
                })
                .catch(error => {
                  // handle failure
                  navigation.navigate(Constants.SCREEN_SUCCESS, {
                    status: 'failed',
                  });
                });
            }}
            commonBtnContainer={{width: '90%'}}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Cart;
