import { Collection } from "model";

/**
 * Data types
 */
export type Collections = { [key: string]: Collection };

/**
 * State types
 */
export interface ShopState {
  collections: Collections;
  isFetching: boolean;
  error: string;
}
