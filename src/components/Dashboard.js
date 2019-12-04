import React, { Component } from "react";
import { connect } from "react-redux";
import TweetList from "./TweetList";
// import { Route, Router } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { tweetIds } = this.props;
    return (
      <div>
        <h3 className="center">Your Timeline</h3>
        <TweetList tweetIds={tweetIds}/>
      </div>
    );
  }
}

const mapStateToProps = ({ tweets }) => ({
  tweetIds: Object.keys(tweets).sort(
    (a, b) => tweets[b].timestamp - tweets[a].timestamp
  )
});

export default connect(mapStateToProps)(Dashboard);
