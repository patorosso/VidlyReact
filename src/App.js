import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Outlet />
      </React.Fragment>
    );
  }
}

export default App;
