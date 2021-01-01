import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCollectionById } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item";

import "./collection.scss";

interface CollectionParams {
  collectionId: string;
}

const Collection = (): JSX.Element => {
  const { collectionId } = useParams<CollectionParams>();
  const collection = useSelector(selectCollectionById(collectionId));

  return (
    <div className="collection-page">
      {collection ? (
        <>
          <h2 className="title">{collection.title}</h2>
          <div className="products">
            {collection.products.map((product) => {
              return <CollectionItem key={product.id} product={product} />;
            })}
          </div>
        </>
      ) : (
        <h2>Page not found.</h2>
      )}
    </div>
  );
};

export default Collection;
