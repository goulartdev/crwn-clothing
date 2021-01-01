import { Collection } from "../../model";

export type Collections = { [key: string]: Collection };

export interface ShopState {
  collections: Collections;
}
