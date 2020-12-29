import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import authReducer from "./auth/auth.reducer";
import cartReducer from "./cart/cart.reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);