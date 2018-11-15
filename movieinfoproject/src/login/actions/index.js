import { post } from "../../service/index";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST
} from "../../constants/AppConstants";
import { LOGIN_URL } from "../../constants/AppConstants";
import history from "../../history";
import { toastr } from "react-redux-toastr";

export function fetchToken(bodyjson) {
  return dispatch => {
    post(LOGIN_URL, bodyjson).then(response => {
      if (response.status === 200) {
        console.log("data us,", response.payload.accessToken);
        localStorage.setItem("user", bodyjson.username);
        localStorage.setItem("accessToken", response.payload.accessToken);
        console.log("get accesstoken", localStorage.getItem("accessToken"));
        history.push("/");
        dispatch({
          type: LOGIN_SUCCESS,
          data: response.payload
        });
      } else {
        toastr.error("Invalid Credentials");
        dispatch({
          type: LOGIN_FAILED,
          data: response.status
        });
      }
    });
  };
}

export function logoutClicked() {
  return dispatch => {
    dispatch({
      type: LOGOUT_REQUEST
    });
  };
}
