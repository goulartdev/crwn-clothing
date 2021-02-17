import { call, put, takeLatest, StrictEffect, all } from "redux-saga/effects";
import { Collection } from "model";

import { fetchCollections } from "services/api";

import * as Action from "./shop.slice";

function* fetchCollectionsAsync(): Generator<StrictEffect, void, Collection[]> {
  try {
    const collections = yield call(fetchCollections);

    yield put(Action.fetchCollectionSuccess(collections));
  } catch (error) {
    yield put(Action.fetchCollectionFailure(error));
  }
}

function* onFetchCollections(): Generator<StrictEffect, void> {
  yield takeLatest(Action.fetchCollectionsStart, fetchCollectionsAsync);
}

export function* shopSagas(): Generator<StrictEffect, void> {
  yield all([call(onFetchCollections)]);
}
