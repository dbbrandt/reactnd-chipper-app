import React, { Component } from "react";
import { connect } from 'react-redux';
import { handleGetInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleGetInitialData());
  }

  render() {
    return <Dashboard/>
  }
}

export default connect()(App);
