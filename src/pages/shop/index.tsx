import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, useRouteMatch } from "react-router-dom";

import CollectionsOverview from "./components/CollectionsOverview";
import { fetchCollectionsStart } from "redux/shop/shop.slice";

import Collection from "./components/Collection";

const ShopPage = (): JSX.Element => {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, []);

  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default ShopPage;
