import { Link, useLocation } from "react-router-dom";
import { Collection } from "model";

import * as S from "./styles";
import ProductsGrid from "../ProductsGrid";

interface PreviewCollectionPros {
  collection: Collection;
}

const PreviewCollection = (props: PreviewCollectionPros): JSX.Element => {
  const { title, products } = props.collection;
  const { pathname } = useLocation();

  return (
    <S.CollectionPreview>
      <S.CollectionTitle>
        <Link to={`${pathname}/${title.toLocaleLowerCase()}`}>
          {title.toUpperCase()} ❯❯
        </Link>
      </S.CollectionTitle>

      <ProductsGrid products={products.slice(0, 4)} />
    </S.CollectionPreview>
  );
};

export default PreviewCollection;
