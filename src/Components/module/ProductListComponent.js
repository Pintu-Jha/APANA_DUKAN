import {View,FlatList} from 'react-native';
import React from 'react';
import ProductListComponentRow from '../row/productListComponentRow';
import {spacing} from '../../Styles/spacing';
import {useDispatch} from 'react-redux';
import {addItemToCart, addItemToWishlist} from '../../Redux/Action/Action';

const ProductListComponent = ({data}) => {
  const dispatch = useDispatch();
  return (
    <View style={{marginVertical: spacing.MARGIN_10}}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <ProductListComponentRow
              index={index}
              item={item}
              onAddWishlist={x => {
                dispatch(addItemToWishlist(item));
              }}
              onAddToCart={x => {
                dispatch(addItemToCart(item));
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default ProductListComponent;
