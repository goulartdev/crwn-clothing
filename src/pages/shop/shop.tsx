import { Route, useRouteMatch } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import Collection from "../collection/collection";

import "./shop.scss";

const ShopPage = (): JSX.Element => {
  const match = useRouteMatch();

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default ShopPage;
