import { Product } from "../../model";
import { CartAction, CartActionTypes } from "./cart.types";

export const toggleCartDropdownVisibility = (): CartAction => ({
  type: CartActionTypes.TOGGLE_DROPDOWN_VISIBILITY,
});

export const addItemToCart = (item: Product): CartAction => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

export const removeItemFromCart = (item: Product): CartAction => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
})

export const clearItemFromCart = (item: Product): CartAction => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: item
})