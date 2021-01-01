import { Product } from "./";

export interface Collection {
  id: string;
  title: string;
  products: Product[];
}