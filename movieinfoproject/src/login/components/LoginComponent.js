import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = theme => ({
  button: {
    margin: "auto",
    marginTop:16,
    marginBottom:16
  },
  input: {
    display: "none"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    margin: "auto",
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    textAlign: "center",
    width: 200
  },
  card: {
    width: 500,
    margin: "auto",
    display: "flex",
    textAlign: "center",
    marginTop: 90
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const LoginComponent = props => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="UserName"
            className={classes.textField}
            value={props.name}
            onChange={props.handleNameChange("name")}
            margin="normal"
          />

          <TextField
            id="standard-name"
            type="password"
            name="password"
            label="Password"
            className={classes.textField}
            value={props.password}
            onChange={props.handlePasswordChange("password")}
            margin="normal"
          />

          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={props.handleClick}
          >
            Login
          </Button>
        </form>
        <Link to="/signup">New User ?</Link>
      </CardContent>
    </Card>
  );
};

LoginComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginComponent);
