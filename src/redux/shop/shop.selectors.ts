import { createSelector } from "reselect";
import { Collection } from "model";
import { RootState } from "../root-reducer";
import { Collections, ShopState } from "./shop.types";

const selectShop = (state: RootState): ShopState => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop: ShopState): Collections => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections: Collections): Collection[] => Object.values(collections)
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const selectCollectionById = (id: string) => {
  return createSelector(
    [selectCollections],
    (collections: Collections): Collection => collections[id]
  );
};

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop: ShopState) => shop.isFetching
);
