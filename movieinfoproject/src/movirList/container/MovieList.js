import React from "react";
import { connect } from "react-redux";
import {
  getAllMovies,
  getMovieDetails,
  getMoviesByFilter
} from "../actions/index";
import MovieListComponent from "../component/MovieListComponent";
class MoviewList extends React.Component {
  state = {
    selectedYear: "",
    selectedLanguage: ""
  };

  showDetails = movieId => {
    // this.props.getMovieDetails(movieId);
    this.props.history.push(`/movie_details/${movieId}`);
  };

  componentDidMount() {
    let authorization = localStorage.getItem("accessToken");
    this.props.getAllMovies(authorization);
  }

  handleYearFilter = event => {
    this.setState({ selectedYear: event.target.value }, () => {
      this.props.getMoviesByFilter(
        this.state.selectedYear,
        this.state.selectedLanguage
      );
    });
  };

  handleLanguageFilter = event => {
    this.setState({ selectedLanguage: event.target.value }, () => {
      this.props.getMoviesByFilter(
        this.state.selectedYear,
        this.state.selectedLanguage
      );
    });
  };
  render() {
    return (
      <MovieListComponent
        selectedYear={this.state.selectedYear}
        selectedLanguage={this.state.selectedLanguage}
        showDetails={this.showDetails}
        movieData={this.props.movieData}
        handleYearFilter={this.handleYearFilter}
        handleLanguageFilter={this.handleLanguageFilter}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    movieData: state.MovieReducer.movieData
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getAllMovies: bodyJson => dispatch(getAllMovies(bodyJson)),
    getMovieDetails: movieId => dispatch(getMovieDetails(movieId)),
    getMoviesByFilter: (year, language) =>
      dispatch(getMoviesByFilter(year, language))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviewList);
