import { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrentUser } from "redux/auth/auth.selectors";
import { checkUserSession } from "redux/auth/auth.slice";

import { Authentication, HomePage, ShopPage, Checkout } from "./pages";
import Header from "components/Header";

import "./App.css";

function App(): JSX.Element {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

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
