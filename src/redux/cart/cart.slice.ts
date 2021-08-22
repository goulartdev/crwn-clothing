import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartItem, Product } from "model";
import { CartState } from "./cart.types";

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: ({ items }, { payload: product }: PayloadAction<Product>) => {
      const existingItem = findProduct(items, product);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        items.push({
          product,
          quantity: 1,
        });
      }
    },

    removeItem: (state, { payload: product }: PayloadAction<Product>) => {
      const existingItem = findProduct(state.items, product);

      if (existingItem) {
        existingItem.quantity--;
      }

      state.items = state.items.filter((item) => item.quantity > 0);
    },

    clearItem: ({ items }, { payload: product }: PayloadAction<Product>) => {
      const index = items.findIndex((item) => item.product.id === product.id);
      items.splice(index, 1);
    },

    clearCart: ({ items }) => {
      items.splice(0, items.length);
    },
  },
});

const findProduct = (items: CartItem[], product: Product) => {
  return items.find((item) => item.product.id === product.id);
};

export const { addItem, removeItem, clearItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
