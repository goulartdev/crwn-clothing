import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrentUser } from "./redux/auth/auth.selectors";

import { Authentication, HomePage, ShopPage, Checkout } from "./pages";
import Header from "./components/Header";

import "./App.css";
import { useEffect } from "react";
import { checkUserSession } from "./redux/auth/auth.slice";
// import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";

function App(): JSX.Element {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  // const collections = useSelector(selectCollectionsForPreview);
  //
  // useEffect(() => {
  //   const toAdd = collections.map(({ title, products }) => ({
  //     title,
  //     products: products.map(({ id, name, price, imageUrl }) => ({
  //       id,
  //       name,
  //       price,
  //       imageUrl,
  //     })),
  //   }));
  //   addCollectionAndDocuments("collections", toAdd);
  // }, []);

  return (
    <div className="app-container">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <Authentication />)}
        />
      </Switch>
    </div>
  );
}

export default App;
