import { ShopDataItem } from "../../model";
import { CartItem } from "../../model/cart-item";

export interface CartState {
  dropdownHidden: boolean;
  items: CartItem[];
};

export const CartActionTypes = {
  TOGGLE_DROPDOWN_VISIBILITY: 'TOGGLE_DROPDOWN_VISIBILITY',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_ITEM: 'CLEAR_ITEM',
};

interface ToggleDropdownVisibilityAction {
  type: typeof CartActionTypes.TOGGLE_DROPDOWN_VISIBILITY;
  payload?: any;
};

interface AddItem {
  type: typeof CartActionTypes.ADD_ITEM;
  payload: ShopDataItem;
}

interface RemoveItem {
  type: typeof CartActionTypes.REMOVE_ITEM;
  payload: ShopDataItem
}

interface ClearItem {
  type: typeof CartActionTypes.CLEAR_ITEM;
  payload: ShopDataItem
}

export type CartAction = ToggleDropdownVisibilityAction | AddItem | RemoveItem | ClearItem;