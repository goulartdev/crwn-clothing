import { User } from "../../model";

import { AuthActionTypes, SET_CURRENT_USER } from "./auth.types";

export const setCurrentUser = (user: User | null): AuthActionTypes => ({
  type: SET_CURRENT_USER,
  payload: user
})