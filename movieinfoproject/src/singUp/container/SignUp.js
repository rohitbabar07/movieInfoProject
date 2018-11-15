import React from "react";
import SignUpComponent from "../component/SignUpComponent";
import { connect } from "react-redux";
import { registerUser } from "../actions/index";
import history from "../../history";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      firstName: "",
      lastName: ""
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
  handleFirstNameChange = () => event => {
    this.setState({
      firstName: event.target.value
    });
  };

  handleLastNameChange = () => event => {
    this.setState({
      lastName: event.target.value
    });
  };

  handleClick = event => {
    event.preventDefault();
    var bodyJson = {
      userName: this.state.name,
      password: this.state.password,
      lastName: this.state.lastName,
      firstName: this.state.firstName
    };
    this.props.registerUser(bodyJson);
  };
  render() {
    return (
      <div>
        {localStorage.getItem("user") === null ? (
          <SignUpComponent
            name={this.state.name}
            password={this.state.password}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            handleNameChange={this.handleNameChange}
            handlePasswordChange={this.handlePasswordChange}
            handleFirstNameChange={this.handleFirstNameChange}
            handleLastNameChange={this.handleLastNameChange}
            handleClick={this.handleClick}
          />
        ) : (
          history.push("/")
        )}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    registerUser: bodyJson => dispatch(registerUser(bodyJson))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
