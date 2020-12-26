import { AuthState, AuthActionTypes, AuthAction } from "./auth.types";

const initialState: AuthState = {
  currentUser: null
}

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionTypes.SET_CURRENT_USER:
      return { 
        ...state, 
        currentUser: action.payload
      }
    default:
      return state;
  }
}

export default authReducer;