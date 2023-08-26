import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  REMOVE_TO_CART,
  REMOVE_TO_WISHLIST,
} from '../ActionType';

export const addItemToCart = data => ({
  type: ADD_TO_CART,
  payload: data,
});

export const removeItemToCart = index => ({
  type: REMOVE_TO_CART,
  payload: index,
});

export const addItemToWishlist = data => ({
  type: ADD_TO_WISHLIST,
  payload: data,
});

export const removeItemToWishlist = index => ({
  type: REMOVE_TO_WISHLIST,
  payload: index,
});
