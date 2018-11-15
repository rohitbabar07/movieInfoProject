import { post } from "../../service/index";
import { SIGNUP_FAILED, SIGNUP_SUCCESS } from "../../constants/AppConstants";
import { SIGNUP_URL } from "../../constants/AppConstants";
import history from "../../history";
import { toastr } from "react-redux-toastr";

export function registerUser(bodyjson) {
  return dispatch => {
    post(SIGNUP_URL, bodyjson).then(response => {
      if (response.status === 200) {
        history.push("/login");
        toastr.success("User successfully created");
        dispatch({
          type: SIGNUP_SUCCESS,
          data: response.payload
        });
      } else {
        toastr.error("Please Enter correct details");
        dispatch({
          type: SIGNUP_FAILED,
          data: response.status
        });
      }
    });
  };
}
