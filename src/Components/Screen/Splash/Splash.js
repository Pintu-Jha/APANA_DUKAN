import {View, Image, StyleSheet, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {textScale} from '../../../Styles/responsiveStyles';
import {Color, Constants} from '../../../Utility/imdex';
import colors from '../../../Utility/colors';
import commonStyle from '../../../Styles/commonStyle';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Constants.SCREEN_LOGIN);
    }, 2000);
  }, []);
  return (
    <View style={Styles.container}>
      <Text style={Styles.logoText}>APANA DUKAN</Text>
    </View>
  );
};

export default Splash;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    ...commonStyle.flexRow,
    ...commonStyle.justifyALignCenter,
    backgroundColor: '#fff',
  },
  logoText: {
    fontSize: textScale(26),
    color: colors.black,
    fontWeight: '900',
  },
});
