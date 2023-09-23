import { ADD_TO_ORDER, REMOVE_TO_ORDER} from '../ActionType';

const OrderReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_ORDER:
      return [...state, action.payload];
    case REMOVE_TO_ORDER:
      const deleteArray = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deleteArray;
    default:
      return state;
  }
};

export default OrderReducer;