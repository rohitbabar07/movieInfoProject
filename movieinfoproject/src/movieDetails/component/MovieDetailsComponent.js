import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    width: 500,
    margin: "auto",
    display: "flex",
    textAlign: "center",
    marginTop: 20
  },
  media: {
    height: 300
  }
};

function MovieDetailsComponent(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.movieDetailsData.poster}
          title="Movie"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.movieDetailsData.title}
          </Typography>
          <Typography component="p">
            <Typography component="p">{props.movieDetailsData.year}</Typography>
            <Typography component="p">
              {props.movieDetailsData.rated}
            </Typography>
            <Typography component="p">
              {props.movieDetailsData.released}
            </Typography>
            <Typography component="p">
              {props.movieDetailsData.runtime}
            </Typography>

            <Typography component="p">
              {props.movieDetailsData.genre}
            </Typography>
            <Typography component="p">
              {props.movieDetailsData.director}
            </Typography>
            <Typography component="p">
              {props.movieDetailsData.writer}
            </Typography>
            <Typography component="p">
              {props.movieDetailsData.actors}
            </Typography>

            <Typography component="p">{props.movieDetailsData.plot}</Typography>
            <Typography component="p">
              {props.movieDetailsData.language}
            </Typography>
            <Typography component="p">
              {props.movieDetailsData.country}
            </Typography>
            <Typography component="p">
              {props.movieDetailsData.awards}
            </Typography>

            <Typography component="p">
              {props.movieDetailsData.metascore}
            </Typography>
            <Typography component="p">
              {props.movieDetailsData.imdbRating}
            </Typography>
            <Typography component="p">
              {props.movieDetailsData.imdbVotes}
            </Typography>
            <Typography component="p">
              {props.movieDetailsData.imdbID}
            </Typography>

            <Typography component="p">{props.movieDetailsData.type}</Typography>
            <Typography component="p">{props.movieDetailsData.dvd}</Typography>
            <Typography component="p">
              {props.movieDetailsData.boxOffice}
            </Typography>
            <Typography component="p">
              {props.movieDetailsData.production}
            </Typography>
            <Typography component="p">
              {props.movieDetailsData.website}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MovieDetailsComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MovieDetailsComponent);
