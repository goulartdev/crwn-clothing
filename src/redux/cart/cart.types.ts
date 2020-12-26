export interface CartState {
  hidden: boolean;
};

export const CartActionTypes = {
  TOOGLE_CART_DROPDOWN_VISIBILITY: 'TOOGLE_CART_DROPDOWN_VISIBILITY'
};

interface ToggleCartDropdownVisibilityAction {
  type: typeof CartActionTypes.TOOGLE_CART_DROPDOWN_VISIBILITY;
};

export type CartAction = ToggleCartDropdownVisibilityAction;