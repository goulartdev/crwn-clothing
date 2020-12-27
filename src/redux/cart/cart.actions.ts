import { ShopDataItem } from "../../model";
import { CartAction, CartActionTypes } from "./cart.types";

export const toogleCartDropdownVisibility = (): CartAction => ({
  type: CartActionTypes.TOOGLE_DROPDOWN_VISIBILITY,
});

export const addItemToCart = (item: ShopDataItem): CartAction => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})