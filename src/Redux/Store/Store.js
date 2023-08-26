import {createStore} from 'redux';
import Cartreducer from '../Reduces/Cartreducer';
import WishlistReducer from '../Reduces/WishlistReducer';
import {combineReducers} from 'redux';
const routeReducer = combineReducers({Cartreducer, WishlistReducer});
export const store = createStore(routeReducer);
