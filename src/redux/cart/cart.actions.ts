import { ShopDataItem } from "../../model";
import { CartAction, CartActionTypes } from "./cart.types";

export const toggleCartDropdownVisibility = (): CartAction => ({
  type: CartActionTypes.TOGGLE_DROPDOWN_VISIBILITY,
});

export const addItemToCart = (item: ShopDataItem): CartAction => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})