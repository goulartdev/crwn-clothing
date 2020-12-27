import { ShopDataItem } from "../../model";
import { CartItem } from "../../model/cart-item";

export interface CartState {
  dropdownHidden: boolean;
  cartItems: CartItem[];
};

export const CartActionTypes = {
  TOOGLE_DROPDOWN_VISIBILITY: 'TOOGLE_DROPDOWN_VISIBILITY',
  ADD_ITEM: 'ADD_ITEM'
};

interface ToggleDropdownVisibilityAction {
  type: typeof CartActionTypes.TOOGLE_DROPDOWN_VISIBILITY;
  payload?: any;
};

interface AddItem {
  type: typeof CartActionTypes.ADD_ITEM;
  payload: ShopDataItem;
}

export type CartAction = ToggleDropdownVisibilityAction | AddItem;