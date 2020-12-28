import { ShopDataItem } from "../../model";
import { CartAction, CartActionTypes } from "./cart.types";

export const toggleCartDropdownVisibility = (): CartAction => ({
  type: CartActionTypes.TOGGLE_DROPDOWN_VISIBILITY,
});

export const addItemToCart = (item: ShopDataItem): CartAction => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

export const removeItemFromCart = (item: ShopDataItem): CartAction => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
})

export const clearItemFromCart = (item: ShopDataItem): CartAction => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: item
})