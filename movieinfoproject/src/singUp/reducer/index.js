import { SIGNUP_SUCCESS, SIGNUP_FAILED } from "../../constants/AppConstants";

const initialState = {
  response: [],
  error: false
};

export default function SignUpReducer(state = initialState, action) {
  console.log("Created User Detail-in signUp action", action.data);
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        response: action.data,
        error: false
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        response: action.data,
        error: true
      };
    default:
      return state;
  }
}
