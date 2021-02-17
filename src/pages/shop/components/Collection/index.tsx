import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCollectionById } from "redux/shop/shop.selectors";

import CollectionItem from "../CollectionItem";

import * as S from "./styles";

interface CollectionParams {
  collectionId: string;
}

const Collection = (): JSX.Element => {
  const { collectionId } = useParams<CollectionParams>();
  const collection = useSelector(selectCollectionById(collectionId));

  return (
    <S.CollectionPage>
      {collection ? (
        <>
          <S.Title>{collection.title}</S.Title>
          <S.Collection>
            {collection.products.map((product) => {
              return <CollectionItem key={product.id} product={product} />;
            })}
          </S.Collection>
        </>
      ) : (
        <S.Title>Page not found.</S.Title>
      )}
    </S.CollectionPage>
  );
};

export default Collection;
