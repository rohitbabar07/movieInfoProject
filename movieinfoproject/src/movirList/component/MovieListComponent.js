import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const styles = {
  card: {
    textAlign: "center",
    maxWidth: 400,
    margin: 16
  },
  media: {
    height: 350
  },
  formControl: {
    margin: 64,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: 16
  }
};

function MovieListComponent(props) {
  const { classes } = props;
  let movieContent = props.movieData.map((movie, i) => {
    return (
      <Grid item>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={movie.poster}
              title={movie.movieName}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {movie.movieName}
              </Typography>
              <Typography component="p">
                <Typography component="p">{movie.year}</Typography>
                <Typography component="p">{movie.genre}</Typography>
                <Typography component="p">{movie.director}</Typography>
                <Typography component="p">{movie.language}</Typography>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => props.showDetails(movie._id)}
            >
              View Details
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });
  return (
    <div>
      <div>
        <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel >Year</InputLabel>
            <Select
              value={props.selectedYear}
              onChange={props.handleYearFilter}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={2018}>2018</MenuItem>
              <MenuItem value={2015}>2015</MenuItem>
              <MenuItem value={2016}>2016</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel >Language</InputLabel>
            <Select
              value={props.selectedLanguage}
              onChange={props.handleLanguageFilter}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Hindi"}>Hindi</MenuItem>
              <MenuItem value={"Telgu"}>Telgu</MenuItem>
              <MenuItem value={"English"}>English</MenuItem>
            </Select>
          </FormControl>
        </form>
      </div>
      <Grid container>{movieContent}</Grid>
    </div>
  );
}

MovieListComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MovieListComponent);
