import { CartItem, ShopDataItem } from "../../model";
import { CartAction, CartActionTypes, CartState } from "./cart.types";


const initialState: CartState = {
  dropdownHidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case CartActionTypes.TOOGLE_DROPDOWN_VISIBILITY:
      return {
        ...state, 
        dropdownHidden: !state.dropdownHidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state, 
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

const addItemToCart = (cartItems: CartItem[], itemToAdd: ShopDataItem) => {
  let newCartItems = [...cartItems]
  const existingCartItem = newCartItems.find(item => item.product.id === itemToAdd.id);
  
  if (existingCartItem) {
    existingCartItem.quantity++;
  } else {
    newCartItems.push({
      product: itemToAdd,
      price: itemToAdd.price,
      quantity: 1
    })
  }

  return newCartItems
}

export default cartReducer;