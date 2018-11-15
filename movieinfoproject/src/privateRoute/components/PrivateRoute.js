import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  isFetching,
  hasUserLogIn,
  path,
  ...rest
}) => {
  hasUserLogIn = localStorage.getItem("accessToken");
  if (hasUserLogIn !== undefined && hasUserLogIn !== null) {
    hasUserLogIn = true;
  } else {
    hasUserLogIn = false;
  }
  return hasUserLogIn ? (
    <Route {...rest} path={path} component={Component} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: path }
      }}
    />
  );
};

function mapStateToProps(state) {
  return {
    isFetching: state.LoginReducer.isFetching
  };
}

export default connect(mapStateToProps)(PrivateRoute);
