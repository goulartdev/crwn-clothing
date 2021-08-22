import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  selectCollectionById,
  selectIsCollectionFetching,
} from "redux/shop/shop.selectors";

import ProductsGrid from "../ProductsGrid";

import CollectionSkeleton from "./collection.skeleton";
import * as S from "./styles";

interface CollectionParams {
  collectionId: string;
}

const Collection = (): JSX.Element => {
  const { collectionId } = useParams<CollectionParams>();
  const collection = useSelector(selectCollectionById(collectionId));
  const isFetching = useSelector(selectIsCollectionFetching);

  if (isFetching) {
    return <CollectionSkeleton numItems={12} />;
  }

  return (
    <S.CollectionPage>
      {collection ? (
        <>
          <S.Title>{collection.title}</S.Title>
          <ProductsGrid products={collection.products} />
        </>
      ) : (
        <S.Title>Collection not found.</S.Title>
      )}
    </S.CollectionPage>
  );
};

export default Collection;
