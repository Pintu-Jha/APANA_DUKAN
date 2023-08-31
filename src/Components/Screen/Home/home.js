import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Images} from '../../../Utility/imgPath';
import {spacing} from '../../../Styles/spacing';
import colors from '../../../Utility/colors';
import {product} from '../../Common/Product';
import VirtualizedView from '../../Common/VirtualizedView';
import {useDispatch, useSelector} from 'react-redux';
import {APP_PADDING_HORIZONTAL} from '../../../Styles/commonStyle';
import ProductListComponent from '../../module/ProductListComponent';
import ProductListHeaderText from '../../module/ProductListHeaderText';

const Home = () => {

  const [categoryList, setCotegoryList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);
  const [jeansList, setjeansList] = useState([]);
  const [shoesList, setShoesList] = useState([]);
  const [jecketList, setJecketList] = useState([]);
  const [slipperList, setSlipperList] = useState([]);
  const [trouserList, setTrouserList] = useState([]);

  useEffect(() => {
    let tempCategory = [];
    product.category.map(item => {
      tempCategory.push(item);
    });
    setCotegoryList(tempCategory);
    setTshirtList(product.category[0].data);
    setjeansList(product.category[1].data);
    setShoesList(product.category[2].data);
    setJecketList(product.category[3].data);
    setSlipperList(product.category[4].data);
    setTrouserList(product.category[5].data);
  }, []);



  return (
    <VirtualizedView style={{flex: 1, backgroundColor: colors.grey100}}>
      <Image source={Images.IMG_BANNER} style={styles.bannerImg} />
      <View style={{marginVertical: APP_PADDING_HORIZONTAL}}>
        <FlatList
          data={categoryList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={[
                  styles.categoryListContainer,
                  index == 0 && {marginLeft: APP_PADDING_HORIZONTAL},
                ]}>
                <Text style={{fontWeight: '600', color: colors.grey600}}>
                  {item.category}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <ProductListHeaderText title={'New T-Shirt'} />
      <ProductListComponent data={tshirtList} />
      <ProductListHeaderText title={'New Jeans'} />
      <ProductListComponent data={jeansList} />
      <ProductListHeaderText title={'New Shoes'} />
      <ProductListComponent data={shoesList} />
      <ProductListHeaderText title={'New Jecket'} />
      <ProductListComponent data={jecketList} />
      <ProductListHeaderText title={'New Slipper'} />
      <ProductListComponent data={slipperList} />
      <ProductListHeaderText title={'New Trouser'} />
      <ProductListComponent data={trouserList} />
    </VirtualizedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  bannerImg: {
    width: '95%',
    height: spacing.HEIGHT_240,
    alignSelf: 'center',
    borderRadius: spacing.RADIUS_10,
    marginTop: spacing.MARGIN_10,
  },
  categoryListContainer: {
    borderRadius: spacing.RADIUS_12,
    padding: spacing.PADDING_10,
    borderWidth: 1,
    marginRight: spacing.MARGIN_20,
  },
});
