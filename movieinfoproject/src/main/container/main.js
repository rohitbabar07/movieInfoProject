import React from "react";
import { Route, Router, Switch, Link } from "react-router-dom";
import Login from "../../login/container/Login";
import SignUp from "../../singUp/container/SignUp";
import MovieList from "../../movirList/container/MovieList";
import history from "../../history";
import PrivateRoute from "../../privateRoute/components/PrivateRoute";
import NotFound from "../../notFound/component/NotFound";
import MovieDetails from "../../movieDetails/container/MovieDetails";
class Main extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>
              <PrivateRoute exact path="/" component={MovieList} />
              {/* <PrivateRoute exact path="/movie_details" component={MovieDetails}/> */}
              <PrivateRoute
                exact
                path="/movie_details/:id"
                component={MovieDetails}
              />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/*" component={NotFound} something="foo" />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default Main;
