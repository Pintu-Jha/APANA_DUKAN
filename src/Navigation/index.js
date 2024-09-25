import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const Appstack = () => {
  const [userData, setUserData] = useState('');
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const email = await AsyncStorage.getItem('email');
        const parsedData = JSON.parse(email);
        setUserData(parsedData?.email); 
      } catch (error) {
        console.error('Error retrieving user:', error);
      }
      setInitializing(false);
    };
    checkUser();
  }, []);
  if (initializing) {
    // You can show a loading spinner or a splash screen while initializing
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {userData ? MainStack(Stack) : AuthStack(Stack)}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Appstack;
