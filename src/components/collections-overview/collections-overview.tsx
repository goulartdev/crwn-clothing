import { useSelector } from "react-redux";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import PreviewCollection from "../preview-collection/preview-collection";

import "./collections-overview.scss";

const CollectionsOverview = (): JSX.Element => {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <div className="collections-overview">
      {collections.map((collection) => {
        return (
          <PreviewCollection key={collection.id} collection={collection} />
        );
      })}
    </div>
  );
};

export default CollectionsOverview;
