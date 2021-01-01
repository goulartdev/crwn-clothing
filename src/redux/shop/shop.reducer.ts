import { ShopState } from "./shop.types";

import SHOP_DATA from "./shop.data";

const initialState: ShopState = {
  collections: SHOP_DATA,
};

const shopReducer = (state = initialState): ShopState => {
  return state;
};

export default shopReducer;
