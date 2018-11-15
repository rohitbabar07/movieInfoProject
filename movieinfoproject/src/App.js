import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./AppStore";
import Main from "./main/container/main";
import Header from "./header/container/Header";
import ReduxToastr from "react-redux-toastr";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid">
          <Header />
          <Main />
          <ReduxToastr />
        </div>
      </Provider>
    );
  }
}

export default App;
