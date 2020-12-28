import { AuthUser } from "../../model";

import { AuthActionTypes, AuthAction } from "./auth.types";

export const setCurrentUser = (user: AuthUser): AuthAction => ({
  type: AuthActionTypes.SET_CURRENT_USER,
  payload: user
});