import { CartAction, CartActionTypes, CartState } from "./cart.types";


const initialState: CartState = {
  hidden: true
};

const cartReducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case CartActionTypes.TOOGLE_CART_DROPDOWN_VISIBILITY:
      return {...state, hidden: !state.hidden};
    default:
      return state;
  }
};

export default cartReducer;