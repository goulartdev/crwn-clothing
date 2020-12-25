import { AuthActionTypes, AuthState, SET_CURRENT_USER } from "./auth.types";

const initialState: AuthState = {
  currentUser: null
}

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { 
        ...state, 
        currentUser: action.payload
      }
    default:
      return state;
  }
}

export default authReducer;