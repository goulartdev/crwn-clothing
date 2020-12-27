import { createSelector } from "reselect";
import { CartItem } from "../../model";
import { RootState } from "../root-reducer";
import { CartState } from "./cart.types";

export const selectCart = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  ((cart: CartState): CartItem[] => cart.items)
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (items: CartItem[]): number => items.reduce((total, item: CartItem) => total + item.quantity, 0)
);