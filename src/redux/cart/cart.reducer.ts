import { CartItem, Product } from "../../model";
import { CartAction, CartActionTypes, CartState } from "./cart.types";

const initialState: CartState = {
  dropdownHidden: true,
  items: [],
};

const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_DROPDOWN_VISIBILITY:
      return {
        ...state,
        dropdownHidden: !state.dropdownHidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        items: clearItemFromCart(state.items, action.payload),
      };
    default:
      return state;
  }
};

const addItemToCart = (items: CartItem[], itemToAdd: Product) => {
  const newCartItems = [...items];
  const existingCartItem = newCartItems.find(
    (cartItem) => cartItem.product.id === itemToAdd.id
  );

  if (existingCartItem) {
    existingCartItem.quantity++;
  } else {
    newCartItems.push({
      product: itemToAdd,
      quantity: 1,
    });
  }

  return newCartItems;
};

const removeItemFromCart = (items: CartItem[], itemToAdd: Product) => {
  const existingCartItem = items.find(
    (cartItem) => cartItem.product.id === itemToAdd.id
  );

  if (existingCartItem) {
    existingCartItem.quantity--;
  }

  const newItems = items.filter((cartItem: CartItem) => cartItem.quantity > 0);

  return newItems;
};

const clearItemFromCart = (items: CartItem[], itemToRemove: Product) => {
  return items.filter(
    (cartItem: CartItem) => cartItem.product.id !== itemToRemove.id
  );
};

export default cartReducer;
