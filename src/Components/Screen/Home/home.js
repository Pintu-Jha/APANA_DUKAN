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
import MyProductItem from '../../Common/MyProductItem';
import {textScale} from '../../../Styles/responsiveStyles';
import VirtualizedView from '../../Common/VirtualizedView';

const Home = () => {
  const [categoryList, setCotegoryList] = useState([]);
  const [tshirtList, setTshirtList] = useState([]);
  const [jeansList, setjeansList] = useState([]);
  const [shoesList, setShoesList] = useState([]);
  const [jecketList, setJecketList] = useState([]);
  const [slipperList, setSlipperList] = useState([]);
  const [trouserList, setTrouserList] = useState([]);

  useEffect(() => {
    console.log(product.category[0].data[0].image);
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
      <View style={{margin: spacing.MARGIN_10}}>
        <FlatList
          data={categoryList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={styles.categoryListContainer}>
                <Text style={{fontWeight: '600', color: colors.grey600}}>
                  {item.category}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text style={styles.itemHeaderContainer}>New T-Shirt</Text>
      <View style={{margin: spacing.MARGIN_10}}>
        <FlatList
          data={tshirtList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return <MyProductItem item={item} />;
          }}
        />
      </View>
      <Text style={styles.itemHeaderContainer}>New Jeans</Text>
      <View style={{margin: spacing.MARGIN_10}}>
        <FlatList
          data={jeansList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return <MyProductItem item={item} />;
          }}
        />
      </View>
      <Text style={styles.itemHeaderContainer}>New Shoes</Text>
      <View style={{margin: spacing.MARGIN_10}}>
        <FlatList
          data={shoesList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return <MyProductItem item={item} />;
          }}
        />
      </View>
      <Text style={styles.itemHeaderContainer}>New Jecket</Text>
      <View style={{margin: spacing.MARGIN_10}}>
        <FlatList
          data={jecketList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return <MyProductItem item={item} />;
          }}
        />
      </View>
      <Text style={styles.itemHeaderContainer}>New Slipper</Text>
      <View style={{margin: spacing.MARGIN_10}}>
        <FlatList
          data={slipperList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return <MyProductItem item={item} />;
          }}
        />
      </View>
      <Text style={styles.itemHeaderContainer}>New Trousers</Text>
      <View style={{margin: spacing.MARGIN_10}}>
        <FlatList
          data={trouserList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return <MyProductItem item={item} />;
          }}
        />
      </View>
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
  itemHeaderContainer: {
    fontSize: textScale(16),
    color: colors.black,
    fontWeight: 'bold',
    marginLeft: spacing.MARGIN_10,
  },
});
