import {createStore} from 'redux';
import Cartreducer from '../Reduces/Cartreducer';
import WishlistReducer from '../Reduces/WishlistReducer';
import OrderReducer from '../Reduces/OrderReducer';
import {combineReducers} from 'redux';
const routeReducer = combineReducers({Cartreducer, WishlistReducer,OrderReducer});
export const store = createStore(routeReducer);
