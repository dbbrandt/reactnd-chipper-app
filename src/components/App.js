import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleGetInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import LoadingBar from "react-redux-loading";
import { Route, BrowserRouter as Router, useLocation } from "react-router-dom";
import NavBar from "./NavBar";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleGetInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <NavBar />
            {this.props.loading === true ? null : (
              <div>
                <Route exact path="/" component={Dashboard} />
                <Route path="/new" component={NewTweet} />
                <Route path="/tweet/:id" component={TweetPage} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser, tweets,  location }) {
  return {
    loading: authedUser === null,
    location
  };
}

export default connect(mapStateToProps)(App);
