import React, { Component } from "react";
import { connect } from "react-redux";
import { handleGetInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import LoadingBar from "react-redux-loading";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleGetInitialData());
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true
          ? null
          :
          <Router>
            <div className='container'>
              <NavBar/>
              <Route exact path='/' component={Dashboard}/>
              <Route path='/new' component={NewTweet}/>
              <Route path='/tweet/:id' component={TweetPage}/>
            </div>
          </Router>
        }
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
