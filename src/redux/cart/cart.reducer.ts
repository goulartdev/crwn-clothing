import { CartItem, ShopDataItem } from "../../model";
import { CartAction, CartActionTypes, CartState } from "./cart.types";


const initialState: CartState = {
  dropdownHidden: true,
  items: []
};

const cartReducer = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case CartActionTypes.TOOGLE_DROPDOWN_VISIBILITY:
      return {
        ...state, 
        dropdownHidden: !state.dropdownHidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state, 
        items: addItemToCart(state.items, action.payload)
      };
    default:
      return state;
  }
};

const addItemToCart = (items: CartItem[], itemToAdd: ShopDataItem) => {
  let newItems = [...items]
  const existingItem = newItems.find(item => item.product.id === itemToAdd.id);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    newItems.push({
      product: itemToAdd,
      quantity: 1
    })
  }

  return newItems
}

export default cartReducer;