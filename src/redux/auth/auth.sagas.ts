import { all, call, put, StrictEffect, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  getCurrentUser,
  signInWithEmail,
  signInWithGoogle,
  signOut,
  signUp,
} from "services/api";

import * as Action from "./auth.slice";

import { Credentials, User } from "model";
import { clearCart } from "../cart/cart.slice";
import { NewUser } from "./auth.types";

function* signInWithGoogleAsync(): Generator<StrictEffect, void, User> {
  try {
    const user = yield call(signInWithGoogle);
    yield put(Action.signInSuccess(user));
  } catch (error) {
    yield put(Action.signInFailure(error));
  }
}

function* signInWithEmailAsync({
  payload,
}: PayloadAction<Credentials>): Generator<StrictEffect, void, User> {
  try {
    const user = yield call(signInWithEmail, payload);
    yield put(Action.signInSuccess(user));
  } catch (error) {
    yield put(Action.signInFailure(error));
  }
}

function* checkUserSessionAsync(): Generator<StrictEffect, void, User> {
  try {
    const user = yield call(getCurrentUser);
    yield put(Action.signInSuccess(user));
  } catch (error) {
    yield put(Action.signInFailure(error));
  }
}

function* signOutAsync(): Generator<StrictEffect, void> {
  try {
    yield call(signOut);
    yield put(Action.signOutSuccess());
    yield put(clearCart());
  } catch (error) {
    yield put(Action.signOutFailure(error));
  }
}

function* signUpAsync({
  payload: { name, credentials },
}: PayloadAction<NewUser>): Generator<StrictEffect, void, User> {
  try {
    const user = yield call(signUp, name, credentials);
    yield put(Action.signUpSuccess(user));
  } catch (error) {
    yield put(Action.signUpFailure(error));
  }
}

function* onGoogleSignIn(): Generator<StrictEffect, void> {
  yield takeLatest(Action.googleSignIn, signInWithGoogleAsync);
}

function* onEmailSignIn(): Generator<StrictEffect, void> {
  yield takeLatest(Action.emailSignIn, signInWithEmailAsync);
}

function* onCheckUserSession(): Generator<StrictEffect, void> {
  yield takeLatest(Action.checkUserSession, checkUserSessionAsync);
}

function* onSignOut(): Generator<StrictEffect, void> {
  yield takeLatest(Action.signOut, signOutAsync);
}

function* onSignUp(): Generator<StrictEffect, void> {
  yield takeLatest(Action.signUp, signUpAsync);
}

export function* authSagas(): Generator<StrictEffect, void> {
  yield all([
    call(onGoogleSignIn),
    call(onEmailSignIn),
    call(onCheckUserSession),
    call(onSignOut),
    call(onSignUp),
  ]);
}
