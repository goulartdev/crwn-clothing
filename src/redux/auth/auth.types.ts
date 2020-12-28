import { AuthUser } from "../../model";

export interface AuthState {
  currentUser: AuthUser;
};

export const AuthActionTypes = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
};

interface SetCurrentUserAction {
  type: typeof AuthActionTypes.SET_CURRENT_USER;
  payload: AuthUser
};

export type AuthAction = SetCurrentUserAction;