import React, { Component } from "react";
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const { tweetIds } = this.props
    return (
      <div>
        <ol>
          {tweetIds.map((id) =>
            <li>{id}</li>
          )}
        </ol>
      </div>
    )}
}

const mapStateToProps = ({ tweets }) => ({
  tweetIds: Object.keys(tweets)
    .sort((a,b) => tweets[a].timeStamp - tweets[b].timeStamp)
})

export default connect(mapStateToProps)(Dashboard);
