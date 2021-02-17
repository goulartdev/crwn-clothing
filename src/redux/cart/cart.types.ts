import { Product, CartItem } from "model";

export interface CartState {
  dropdownHidden: boolean;
  items: CartItem[];
}

export const CartActionTypes = {
  TOGGLE_DROPDOWN_VISIBILITY: "TOGGLE_DROPDOWN_VISIBILITY",
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  CLEAR_ITEM: "CLEAR_ITEM",
};

interface ToggleDropdownVisibilityAction {
  type: typeof CartActionTypes.TOGGLE_DROPDOWN_VISIBILITY;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

interface AddItem {
  type: typeof CartActionTypes.ADD_ITEM;
  payload: Product;
}

interface RemoveItem {
  type: typeof CartActionTypes.REMOVE_ITEM;
  payload: Product;
}

interface ClearItem {
  type: typeof CartActionTypes.CLEAR_ITEM;
  payload: Product;
}

export type CartAction =
  | ToggleDropdownVisibilityAction
  | AddItem
  | RemoveItem
  | ClearItem;
