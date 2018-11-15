import { get } from "../../service/index";
import {
  ALL_MOVIES_FETCHED_FAILED,
  ALL_MOVIES_FETCHED_SUCCESS,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_DETAILS_FAILED,
  MOVIE_BY_FILTER
} from "../../constants/AppConstants";
import { ALL_MOVIE_URL, MOVIE_DETAILS_URL } from "../../constants/AppConstants";
import { toastr } from "react-redux-toastr";
export function getAllMovies() {
  return dispatch => {
    get(ALL_MOVIE_URL).then(response => {
      if (response.status === 200) {
        dispatch({
          type: ALL_MOVIES_FETCHED_SUCCESS,
          data: response.payload
        });
      } else {
        toastr.error("Unable to fetch Movies");
        dispatch({
          type: ALL_MOVIES_FETCHED_FAILED,
          data: response.status
        });
      }
    });
  };
}

export function getMoviesByFilter(year,language) {
  return dispatch => {
    let url = MOVIE_BY_FILTER + "year="+ year +"&language="+language;
    get(url).then(response => {
      if (response.status === 200) {
        dispatch({
          type: ALL_MOVIES_FETCHED_SUCCESS,
          data: response.payload
        });
      } else {
        toastr.error("Unable to fetch Movies");
        dispatch({
          type: ALL_MOVIES_FETCHED_FAILED,
          data: response.status
        });
      }
    });
  };
}


export function getMovieDetails(movieId) {
  return dispatch => {
    let url = MOVIE_DETAILS_URL + movieId;
    get(url).then(response => {
      if (response.status === 200) {
        console.log("response for id", response);
        // history.push('/movie_details/'+response.payload._id)

        dispatch({
          type: MOVIE_DETAILS_SUCCESS,
          data: response.payload
        });
      } else {
        toastr.error("Unable to fetch Movies");
        dispatch({
          type: MOVIE_DETAILS_FAILED,
          data: response.status
        });
      }
    });
  };
}
