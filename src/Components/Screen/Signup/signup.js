import React, {useState} from 'react';
import {StyleSheet, Alert, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CommonTextInput from '../../Common/CommonTextInput';
import {Images} from '../../../Utility/imgPath';
import Commonbotton from '../../Common/Commonbotton';
import colors from '../../../Utility/colors';
import {Constants} from '../../../Utility/imdex';
import {spacing} from '../../../Styles/spacing';
import {textScale} from '../../../Styles/responsiveStyles';
import Toast from 'react-native-simple-toast';

const Signup = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badName, setBadName] = useState('');
  const [badEmail, setBadEmail] = useState('');
  const [badPassword, setBadPassword] = useState('');

  const handleSignup = async () => {
    if (!username || !email || !password) {
      return;
    }

    try {
      const existingUser = await AsyncStorage.getItem(email);
      if (existingUser) {
      Toast.show( 'User with this email already exists',Toast.CENTER);
        return;
      }

      const newUser = {
        username,
        email,
        password,
      };

      await AsyncStorage.setItem('email', JSON.stringify(newUser));

     Toast.show( 'Signup successful',Toast.CENTER);
      navigation.navigate(Constants.SCREEN_LOGIN);
    } catch (error) {
      console.error('Error signing up:', error);
      console.error('Error', 'An error occurred during signup');
    }
  };

  const validate = () => {
    if (username == '') {
      setBadName(true);
    } else {
      setBadName(false);
    }
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
    handleSignup();
  };

  const onSignin = () => {
      validate();
  };
  return (
    <ScrollView style={{flex: 1}}>
      <Image source={Images.IMG_LOGO} style={styles.logoImg} />
      <Text style={styles.signupTextHeading}>Create New Account</Text>
      <CommonTextInput
        placeholder={'Enter Name'}
        icon={Images.IMG_USER}
        value={username}
        onChangeText={txt => {
          setUsername(txt);
        }}
      />
      {badName == true && (
        <Text style={styles.warningInputText}>please enter name</Text>
      )}
      <CommonTextInput
        placeholder={'Enter Email'}
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
        value={password}
        onChangeText={txt => {
          setPassword(txt);
        }}
      />
      {badPassword == true && (
        <Text style={styles.warningInputText}>please enter password</Text>
      )}
      <Commonbotton
        title={'Sign Up'}
        textColor={colors.white}
        bgColor={colors.black}
        onPress={onSignin}
      />
      <Text
        style={styles.navigationForLoginText}
        onPress={() => {
        }}>
        Already have Account?
      </Text>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  logoImg: {
    width: spacing.WIDTH_116,
    height: spacing.HEIGHT_128,
    alignSelf: 'center',
    marginTop: spacing.MARGIN_50,
  },
  signupTextHeading: {
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
  navigationForLoginText: {
    alignSelf: 'center',
    color: colors.blue600,
    fontSize: textScale(16),
    textDecorationLine: 'underline',
    marginTop: spacing.MARGIN_18,
    fontWeight: '700',
  },
});
