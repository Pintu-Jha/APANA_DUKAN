import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Images} from '../../../Utility/imgPath';
import {useRoute} from '@react-navigation/native';
import {spacing} from '../../../Styles/spacing';
import {textScale} from '../../../Styles/responsiveStyles';
import Commonbotton from '../../Common/Commonbotton';
import colors from '../../../Utility/colors';
import { SCREEN_HOME } from '../../../Utility/constants';

const SuccessOrder = ({navigation}) => {
  const route = useRoute();
  console.log(route.params.status == 'success');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={
          route.params.status == 'success'
            ? Images.IMG_SUCCESS
            : Images.IMG_FAILED
        }
        style={{width: spacing.WIDTH_64, height: spacing.HEIGHT_64}}
      />
      <Text
        style={{
          fontSize: textScale(20),
          marginTop: spacing.MARGIN_12,
          fontWeight: 'bold',
        }}>
        {
          (route.params.status = 'success'
            ? 'Your Order Place Successfull!'
            : 'Order Failed')
        }
      </Text>
      <Commonbotton
        title={"Go To Home"}
        bgColor={colors.green600}
        textColor={colors.white}
        fontSize={textScale(14)}
        onPress={()=>navigation.navigate(SCREEN_HOME)}
      />
    </View>
  );
};

export default SuccessOrder;
