import { User } from "../../model";

import { AuthActionTypes, AuthAction } from "./auth.types";

export const setCurrentUser = (user: User | null): AuthAction => ({
  type: AuthActionTypes.SET_CURRENT_USER,
  payload: user
})