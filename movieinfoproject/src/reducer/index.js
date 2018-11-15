import { combineReducers } from "redux";
import LoginReducer from "../login/reducer/index";
import SignUpReducer from "../singUp/reducer/index";
import MovieReducer from "../movirList/reducer/index";
import { reducer as toastrReducer } from "react-redux-toastr";
const rootReducer = combineReducers({
  LoginReducer: LoginReducer,
  SignUpReducer: SignUpReducer,
  MovieReducer: MovieReducer,
  toastr: toastrReducer
});

export default rootReducer;
