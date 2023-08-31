import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Images} from '../../../Utility/imgPath';
import colors from '../../../Utility/colors';
import {spacing} from '../../../Styles/spacing';
import {textScale} from '../../../Styles/responsiveStyles';
import {Constants} from '../../../Utility/imdex';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: spacing.MARGIN_16,
        }}>
        <Text
          style={{
            fontSize: textScale(18),
            color: colors.black,
            fontWeight: 'bold',
          }}>
          Account
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={Images.IMG_SETTING}
            style={{width: spacing.WIDTH_22, height: spacing.HEIGHT_22}}
          />
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center', marginTop: spacing.MARGIN_6}}>
        <TouchableOpacity>
          <Image
            source={Images.IMG_PROFILE}
            style={{width: spacing.WIDTH_88, height: spacing.HEIGHT_88}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: textScale(22), color: colors.black}}>
          Pintu jha
        </Text>
      </View>
      <View>
        <FlatList
          data={[
            {
              title: 'My Address',
              isIcon: true,
              disabled: false,
              navigateTo: Constants?.SCREEN_ADD_ADDRESS,
            },
            {
              title: 'My Order',
              isIcon: true,
              disabled: false,
              navigateTo: Constants?.SCREEN_ORDER,
            },
            {
              title: 'Offers',
              isIcon: true,
              disabled: false,
              navigateTo: Constants?.SCREEN_OFFERS,
            },
            {title: 'Help and Support', isIcon: false, disabled: true},
            {title: 'Share app', isIcon: true, disabled: true},
          ]}
          renderItem={({item, index}) => {
            return (
              
                <TouchableOpacity
                  style={Styles.flatlistItem}
                  disabled={item?.disabled}
                  onPress={() => navigation?.navigate(item.navigateTo)}>
                  <View style={Styles.allText}>
                    <Text
                      style={{
                        color: colors.black,
                        fontSize: textScale(16),
                        marginLeft: spacing.MARGIN_16,
                        marginTop: spacing.MARGIN_14,
                      }}>
                      {item.title}
                    </Text>
                    {item.isIcon ? (
                      <Image
                        source={Images.IMG_RIGHT_ARROW}
                        style={Styles.iconStyle}
                      />
                    ) : null}
                  </View>
                </TouchableOpacity>

            );
          }}
        />
      </View>
      <TouchableOpacity>
        <Text style={Styles.SignText}>Sign in</Text>
      </TouchableOpacity>
      <Text style={Styles.versionStyle}>Apana Dukan v.3277.44</Text>
    </View>
  );
};

export default Profile;

const Styles = StyleSheet.create({
  flatlistItem: {
    width: '100%',
    height: 60,
  },
  allText: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconStyle: {
    width: 22,
    height: 22,
    marginRight: 16,
    tintColor: '#000',
    marginTop: 15,
  },
  SignText: {
    alignSelf: 'center',
    color: '#4040bf',
    fontSize: 20,
    marginTop: 20,
  },
  versionStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#000',
    marginTop: 17,
  },
});
