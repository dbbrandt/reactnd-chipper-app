import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
import NewTweet from "./NewTweet";
import TweetList from "./TweetList";

class TweetPage extends Component {
  render() {
    const { id, tweetIds } = this.props;
    return (
      <div>
        <Tweet id={id} />
        <NewTweet id={id} />
        {tweetIds.length > 0 && <h3 className='center'>Replies</h3>}
        <TweetList tweetIds={tweetIds} />
      </div>
    );
  }
}

const mapStateToProps = ({ tweets }, { match }) => {
  const id = match.params.id;
  return {
    id,
    tweetIds: !tweets[id] ?
      []
      :
      tweets[id].replies.sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
  };
};

export default connect(mapStateToProps)(TweetPage);
