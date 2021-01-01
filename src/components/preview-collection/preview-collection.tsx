import { Collection } from "../../model";
import CollectionItem from "../collection-item/collection-item";

import "./preview-collection.scss";

interface PreviewCollectionPros {
  collection: Collection;
}

const PreviewCollection = (props: PreviewCollectionPros): JSX.Element => {
  const { title, products } = props.collection;

  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {products.slice(0, 4).map((product) => (
          <CollectionItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
