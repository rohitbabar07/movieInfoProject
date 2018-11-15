import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST
} from "../../constants/AppConstants";

const initialState = {
  loginResponse: [],
  hasUserLogIn: false,
  error: false,
  dataFetched: false
};

export default function MainReducer(state = initialState, action) {
  console.log("Access tocken:-", action.data);
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        hasUserLogIn: true,
        loginResponse: action.data,
        error: false
      };
    case LOGIN_FAILED:
      return {
        ...state,
        hasUserLogIn: false,
        loginResponse: action.data,
        error: true
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        hasUserLogIn: false
      };
    default:
      return state;
  }
}
