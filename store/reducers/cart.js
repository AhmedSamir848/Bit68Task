import { AsyncStorage } from 'react-native';

import { ADD_TO_CART, REDUCE_FROM_CART, REMOVE_FROM_CART, SET_CART, RESET_CART } from '../actions/cart';
import CartItem from '../../models/cart-item';

const initialState = {
  items: {},
  totalAmount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = parseInt(addedProduct.price.replace('LE', ''));
      const prodTitle = addedProduct.name;

      let updatedOrNewCartItem;

      if (state.items[addedProduct.id]) {
        // already have the item in the cart
        updatedOrNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + prodPrice
        );
      } else {
        updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
      }
      saveDataToStorage({ ...state.items, [addedProduct.id]: updatedOrNewCartItem }, (state.totalAmount + prodPrice));
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + prodPrice
      };

    case REDUCE_FROM_CART:
      const selectedCartItem = state.items[action.pid];
      if (selectedCartItem == undefined) {
        return state;
      }
      const currentQty = selectedCartItem.quantity;
      let updatedCartItems;
      if (currentQty > 1) {
        // need to reduce it, not erase it
        const updatedCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.sum - selectedCartItem.productPrice
        );
        updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.pid];
      }
      saveDataToStorage(updatedCartItems, (state.totalAmount - selectedCartItem.productPrice));
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice
      };

    case REMOVE_FROM_CART:
      const selectedItem = state.items[action.pid];

      if (selectedItem == undefined) {
        return state;
      }
      const updatedItems = { ...state.items };
      delete updatedItems[action.pid];
      saveDataToStorage(updatedItems, (state.totalAmount - selectedItem.productPrice));
      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount - selectedItem.sum
      };

    case SET_CART:
      return action.payload;

    case RESET_CART:
      saveDataToStorage(initialState.items, initialState.totalAmount);
      return initialState;

    default:
      return state;
  }
};

const saveDataToStorage = (items, totalAmount) => {
  AsyncStorage.setItem(
    'userCart',
    JSON.stringify({
      items,
      totalAmount
    })
  );

};