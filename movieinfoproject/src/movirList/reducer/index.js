import {
  ALL_MOVIES_FETCHED_SUCCESS,
  ALL_MOVIES_FETCHED_FAILED,
  MOVIE_DETAILS_SUCCESS,
  MOVIE_DETAILS_FAILED
} from "../../constants/AppConstants";

const initialState = {
  movieData: [],
  hasUserLogIn: false,
  error: false,
  movieDetailData: {}
};

export default function MovieReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_MOVIES_FETCHED_SUCCESS:
      return {
        ...state,
        hasUserLogIn: true,
        movieData: action.data,
        error: false
      };
    case ALL_MOVIES_FETCHED_FAILED:
      return {
        ...state,
        hasUserLogIn: false,
        movieData: action.data,
        error: true
      };
    case MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        hasUserLogIn: true,
        movieDetailData: action.data,
        error: false
      };
    case MOVIE_DETAILS_FAILED:
      return {
        ...state,
        hasUserLogIn: false,
        movieDetailData: action.data,
        error: true
      };
    default:
      return state;
  }
}
