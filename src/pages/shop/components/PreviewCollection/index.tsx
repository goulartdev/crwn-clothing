import { Link, useLocation } from "react-router-dom";
import { Collection } from "model";
import CollectionItem from "../CollectionItem";

import * as S from "./styles";

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
      <S.PreviewItems>
        {products.slice(0, 4).map((product) => (
          <CollectionItem key={product.id} product={product} />
        ))}
      </S.PreviewItems>
    </S.CollectionPreview>
  );
};

export default PreviewCollection;
