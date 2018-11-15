import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function HeaderComponent(props) {
  console.log("local value", localStorage.getItem("accessToken"));
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Movies
          </Typography>
          <Typography variant="h6" color="inherit">
            {localStorage.getItem("user")}
          </Typography>
          {console.log("check", props.hasUserLogIn)}
          {props.hasUserLogIn ||
          localStorage.getItem("accessToken") !== null ? (
            <Button color="inherit" onClick={props.clickedLogout}>
              Logout
            </Button>
          ) : null}
        </Toolbar>
      </AppBar>
    </div>
  );
}

HeaderComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderComponent);
