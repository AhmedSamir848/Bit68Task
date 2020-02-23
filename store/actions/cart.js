export const ADD_TO_CART = 'ADD_TO_CART';
export const REDUCE_FROM_CART = 'REDUCE_FROM_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_CART = 'set_cart';
export const RESET_CART = 'reset_cart';

export const addToCart = product => {  
  return { type: ADD_TO_CART, product: product };
};

export const reduceFromCart = productId => {
  return { type: REDUCE_FROM_CART, pid: productId };
};

export const removeFromCart = productId => {
  return { type: REMOVE_FROM_CART, pid: productId };
};

export const setCart = cartState =>{
  return {
    type: SET_CART,
    payload: cartState
  }
};

export const resetCart = () =>{
  return {type: RESET_CART}
};