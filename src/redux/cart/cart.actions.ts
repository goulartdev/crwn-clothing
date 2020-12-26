import { CartAction, CartActionTypes } from "./cart.types";

export const toogleCartDropdownVisibility = (): CartAction => ({
  type: CartActionTypes.TOOGLE_CART_DROPDOWN_VISIBILITY
});