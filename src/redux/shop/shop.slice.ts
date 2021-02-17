import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Collection } from "model";
import { Collections, ShopState } from "./shop.types";

const initialState: ShopState = {
  collections: {},
  isFetching: false,
  error: "",
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    fetchCollectionsStart: (state) => {
      state.isFetching = true;
      state.error = "";
    },

    fetchCollectionSuccess: (state, { payload }: PayloadAction<Collection[]>) => {
      state.isFetching = false;
      state.error = "";

      state.collections = payload.reduce((accumulator: Collections, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
      }, {});
    },

    fetchCollectionFailure: (state, { payload }: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = payload;
    },
  },
});

export const {
  fetchCollectionsStart,
  fetchCollectionSuccess,
  fetchCollectionFailure,
} = shopSlice.actions;

export default shopSlice.reducer;
