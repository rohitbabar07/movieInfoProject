import React from "react";
import LoginComponent from "../components/LoginComponent";
import { connect } from "react-redux";
import { fetchToken } from "../actions/index";
import history from "../../history";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }

  handleNameChange = () => event => {
    this.setState({
      name: event.target.value
    });
  };

  handlePasswordChange = () => event => {
    this.setState({
      password: event.target.value
    });
  };

  handleClick = event => {
    event.preventDefault();
    var bodyJson = {
      username: this.state.name,
      password: this.state.password
    };
    this.props.fetchToken(bodyJson);
  };

  render() {
    return (
      <div>
        {localStorage.getItem("user") === null ? (
          <LoginComponent
            handleNameChange={this.handleNameChange}
            name={this.state.name}
            handlePasswordChange={this.handlePasswordChange}
            password={this.state.password}
            handleClick={this.handleClick}
          />
        ) : (
          history.push("/")
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hasUserLogIn: state.LoginReducer.hasUserLogIn
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchToken: bodyJson => dispatch(fetchToken(bodyJson))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
