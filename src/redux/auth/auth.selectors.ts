import { createSelector } from "reselect";
import { AuthUser } from "../../model";
import { RootState } from "../root-reducer";
import { AuthState } from "./auth.types";

export const selectAuth = (state: RootState): AuthState => state.auth;

export const selectCurrentUser = createSelector(
  [selectAuth],
  (auth: AuthState): AuthUser => auth.currentUser
);