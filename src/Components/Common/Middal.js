// middleware.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { checkUser } from '../../Redux/Action/Action';


export const fetchData = () => async (dispatch) => {
  try {
    const data = await AsyncStorage.getItem(email);
    if (data) {
      dispatch(checkUser(JSON.parse(data)));
    }
  } catch (error) {
    console.error('Error fetching data from AsyncStorage:', error);
  }
};
