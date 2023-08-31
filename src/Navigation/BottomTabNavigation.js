import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Utils from '../Utility/imdex';
import HomeScreen from '../Components/Screen/Home/home';
import SearchScreen from '../Components/Screen/Serarch/Search';
import NotificationScreen from '../Components/Screen/Notification]/notification';
import ProfileScreen from '../Components/Screen/Profile/profile';
import CartScreen from '../Components/Screen/Cart/cart';
import {spacing} from '../Styles/spacing';
import colors from '../Utility/colors';
import {textScale} from '../Styles/responsiveStyles';
import RegularText from '../Components/Common/RegularText';
import {Images} from '../Utility/imgPath';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();
const tabBarColor = colors.white;

const tabData = [
  {
    name: Utils.Constants.SCREEN_HOME,
    icon: Images.IMG_HOME,
    component: HomeScreen,
  },
  {
    name: Utils.Constants.SCREEN_SEARCH,
    icon: Images.IMG_SEARCH,
    component: SearchScreen,
  },
  {
    name: Utils.Constants.SCREEN_CART,
    icon: Images.IMG_CART,
    component: CartScreen,
  },
  {
    name: Utils.Constants.SCREEN_NOTIFICATION,
    icon: Images.IMG_NOTIFICATION,
    component: NotificationScreen,
  },
  {
    name: Utils.Constants.SCREEN_PROFILE,
    icon: Images.IMG_PROFILE,
    component: ProfileScreen,
  },
];

function BottomTabNavigator() {
  const data = useSelector(state => state);
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: tabBarColor,
            paddingBottom: 0,
            height: spacing.HEIGHT_64,
          },
          tabBarLabelStyle: {alignSelf: 'center'},
          tabBarAllowFontScaling: true,
          headerShown: false,
        }}>
        {tabData.map((item, index) => {
          return (
            <Tab.Screen
              key={`BottomTabMain_${index.toString()}`}
              name={item.name}
              component={item.component}
              options={{
                tabBarBadge:
                  item.name == Utils.Constants.SCREEN_CART
                    ? data?.Cartreducer?.length
                    : item.name == Utils.Constants.SCREEN_NOTIFICATION
                    ? data?.WishlistReducer?.length
                    : null,

                tabBarIcon: ({focused}) => {
                  return (
                    <View
                      style={{
                        alignItems: 'center',
                        backgroundColor: focused ? colors.black : colors.white,
                        borderRadius: spacing.RADIUS_40,
                        padding: spacing.PADDING_8,
                      }}>
                      <Image
                        source={item.icon}
                        style={[
                          Styles.iconStyle,
                          focused && {tintColor: colors.white},
                          item.name == Utils.Constants.SCREEN_SEARCH && {
                            width: spacing.WIDTH_34,
                            height: spacing.HEIGHT_34,
                          },
                        ]}
                        resizeMode="contain"
                      />
                    </View>
                  );
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
    </View>
  );
}

const Styles = StyleSheet.create({
  iconStyle: {
    height: spacing.HEIGHT_30,
    width: spacing.WIDTH_30,
    tintColor: colors.grey500,
  },
});
export default BottomTabNavigator;
