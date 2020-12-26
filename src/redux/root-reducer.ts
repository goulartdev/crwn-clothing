import { combineReducers } from "redux";

import authReducer from "./auth/auth.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;