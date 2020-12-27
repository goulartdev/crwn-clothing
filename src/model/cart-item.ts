import { ShopDataItem } from "./shop-data-item";

export interface CartItem {
  product: ShopDataItem;
  quantity: number;
}