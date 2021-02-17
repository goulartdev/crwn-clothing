import { useSelector } from "react-redux";

import { selectCollectionsForPreview } from "redux/shop/shop.selectors";
import PreviewCollection from "../PreviewCollection";

import * as S from "./styles";

const CollectionsOverview = (): JSX.Element => {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <S.CollectionsOverview>
      {collections.map((collection) => {
        return <PreviewCollection key={collection.id} collection={collection} />;
      })}
    </S.CollectionsOverview>
  );
};

export default CollectionsOverview;
