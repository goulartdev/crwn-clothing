import { all, call, StrictEffect } from "redux-saga/effects";
import { shopSagas } from "./shop/shop.sagas";
import { authSagas } from "./auth/auth.sagas";

export default function* rootSaga(): Generator<StrictEffect, void, unknown> {
  yield all([call(shopSagas), call(authSagas)]);
}
