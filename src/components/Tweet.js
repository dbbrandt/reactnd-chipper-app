import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline
} from "react-icons/ti";
import { handleToggleTweet } from "../actions/tweets";
import { Link, withRouter } from "react-router-dom";

class Tweet extends Component {
  handleLike = e => {
    e.preventDefault();
    const { authedUser, tweet, dispatch } = this.props;
    dispatch(
      handleToggleTweet({ id: tweet.id, authedUser, hasLiked: tweet.hasLiked })
    );
  };

  toParent = (e, id) => {
    e.preventDefault();
    console.log('Tweet toParent: ', this.props);
    this.props.history.push(`/tweet/${id}`);
  };

  render() {
    const { tweet } = this.props;
    if (tweet === null) {
      return <p>This tweet doesn't exist.</p>;
    }
    const {
      id,
      name,
      avatar,
      timestamp,
      text,
      hasLiked,
      likes,
      replies,
      parent
    } = tweet;
    return (
      <Link to={`/tweet/${id}`} className="tweet">
        <img className="avatar" src={avatar} alt={`Avatar or ${name}`} />
        <div className="tweet-info">
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button
                className="replying-to"
                onClick={e => this.toParent(e, parent.id)}
              >
                Replying to @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>
          <div className="tweet-icons">
            <TiArrowBackOutline className="tweet-icon" />
            <span>{replies !== 0 && replies}</span>
            <div>
              <button className="heart-button" onClick={this.handleLike}>
                {hasLiked === true ? (
                  <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
                ) : (
                  <TiHeartOutline className="tweet-icon" />
                )}
              </button>
              <span>{likes !== 0 && likes}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = ({ authedUser, tweets, users }, { id }) => {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
  return {
    authedUser,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
      : null
  };
};

export default withRouter(connect(mapStateToProps)(Tweet));
