import { ShopDataItem } from "./";

export interface ShopData {
  id: number;
  title: string;
  routeName: string;
  items: ShopDataItem[];
}