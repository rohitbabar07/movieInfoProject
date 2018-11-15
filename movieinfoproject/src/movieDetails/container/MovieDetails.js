import React from "react";
import { connect } from "react-redux";
import { getMovieDetails } from "../../movirList/actions/index";
import MovieDetailsComponent from "../component/MovieDetailsComponent";
class MovieDetails extends React.Component {
  componentDidMount() {
    // 1. fetch movie id from URL
    // 2. Make API call to get movie
    this.props.getMovieDetails(this.props.match.params.id);
  }

  render() {
    console.log("final details data", this.props.movieDetails);
    return (
      <div style={{ textAlign: "center" }}>
        <MovieDetailsComponent movieDetailsData={this.props.movieDetails} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieDetails: state.MovieReducer.movieDetailData
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getMovieDetails: movieId => dispatch(getMovieDetails(movieId))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
