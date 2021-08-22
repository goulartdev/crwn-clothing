import { Product } from "model";
import CollectionItem from "../CollectionItem";

import * as S from "./styles";

interface ProductsGridProps {
  products: Product[];
}

const ProductsGrid = ({ products }: ProductsGridProps): JSX.Element => {
  return (
    <S.Grid>
      {products.map((product) => {
        return <CollectionItem key={product.id} product={product} />;
      })}
    </S.Grid>
  );
};

export default ProductsGrid;
