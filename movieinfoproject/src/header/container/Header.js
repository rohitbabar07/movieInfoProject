import React from "react";
import HeaderComponent from "../component/HeaderComponent";
import { connect } from "react-redux";
import { logoutClicked } from "../../login/actions/index";
import history from "../../history";
class Header extends React.Component {
  clickedLogout = () => {
    localStorage.clear();
    history.push("/");
    this.props.logoutClicked();
  };
  render() {
    return (
      <div>
        <HeaderComponent
          hasUserLogIn={this.props.hasUserLogIn}
          clickedLogout={this.clickedLogout}
        />
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
    logoutClicked: () => dispatch(logoutClicked())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
