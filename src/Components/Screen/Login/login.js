import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {textScale} from '../../../Styles/responsiveStyles';
import colors from '../../../Utility/colors';
import {spacing} from '../../../Styles/spacing';
import CommonTextInput from '../../Common/CommonTextInput';
import {Images} from '../../../Utility/imgPath';
import Commonbotton from '../../Common/Commonbotton';
import {Constants} from '../../../Utility/imdex';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState('');
  const [badPassword, setBadPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      return;
    }

    try {
      // Retrieve user data from AsyncStorage
      const userData = await AsyncStorage.getItem(email);
      console.log(email);

      if (!userData) {
        Alert.alert('Error', 'User not found');
        return;
      }

      const user = JSON.parse(userData);

      if (user.password === password) {
        Alert.alert('Success', 'Login successful');
        // You can navigate to another screen here
      } else {
        Alert.alert('Error', 'Invalid password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'An error occurred during login');
    }
  };
  const validate = () => {
    if (email == '') {
      setBadEmail(true);
    } else {
      setBadEmail(false);
    }
    if (password == '') {
      setBadPassword(true);
    } else {
      setBadPassword(false);
    }
    handleLogin();
  };
  return (
    <ScrollView style={{flex: 1}}>
      <Image source={Images.IMG_LOGO} style={styles.logoImg} />
      <Text style={styles.loginTextHeading}>Login</Text>
      <CommonTextInput
        placeholder={'Enter Email Id'}
        icon={Images.IMG_EMAIL}
        value={email}
        onChangeText={txt => {
          setEmail(txt);
        }}
      />
      {badEmail == true && (
        <Text style={styles.warningInputText}>please enter email id</Text>
      )}
      <CommonTextInput
        placeholder={'Enter Password'}
        icon={Images.IMG_PASSWORD}
        type={'Password'}
        value={password}
        onChangeText={txt => {
          setPassword(txt);
        }}
      />
      {badPassword == true && (
        <Text style={styles.warningInputText}>please enter password</Text>
      )}
      <Commonbotton
        title={'Login'}
        textColor={colors.white}
        bgColor={colors.black}
        onPress={() => {
          if (email && password) {
            navigation.navigate(Constants.SCREEN_BOTTOMTABNAVIGATION);
          } else {
            handleLogin();
          }
        }}
      />
      <Text
        style={styles.navigationForSignupText}
        onPress={() => {
          navigation.navigate(Constants.SCREEN_SINGUP);
        }}>
        Create New Account?
      </Text>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  logoImg: {
    width: spacing.WIDTH_116,
    height: spacing.HEIGHT_128,
    alignSelf: 'center',
    marginTop: spacing.MARGIN_50,
  },
  loginTextHeading: {
    color: colors.grey800,
    fontSize: textScale(25),
    alignSelf: 'center',
    marginTop: spacing.MARGIN_50,
    fontWeight: 'bold',
  },
  warningInputText: {
    fontSize: textScale(12),
    fontWeight: '800',
    color: colors.red700,
    marginLeft: spacing.MARGIN_30,
    marginTop: spacing.MARGIN_12,
  },
  navigationForSignupText: {
    alignSelf: 'center',
    color: colors.blue600,
    fontSize: textScale(16),
    textDecorationLine: 'underline',
    marginTop: spacing.MARGIN_18,
    fontWeight: '700',
  },
});
