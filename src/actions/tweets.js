import { saveLikeToggle, saveTweet } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET = "ADD_TWEET";

export const receiveTweets = tweets => ({
  type: RECEIVE_TWEETS,
  tweets
});

const toggleTweet = (id, authedUser, hasLiked) => ({
  type: TOGGLE_TWEET,
  id,
  authedUser,
  hasLiked
});

const addTweet = tweet => ({
  type: ADD_TWEET,
  tweet
});

export function handleToggleTweet(id, authedUser, hasLiked) {
  return dispatch => {
    dispatch(toggleTweet(id, authedUser, hasLiked));
    saveLikeToggle({ id, authedUser, hasLiked }).catch(e => {
      dispatch(toggleTweet(id, authedUser, hasLiked));
      console.warn("Error in handleToggleTweet: ", e);
      alert("There was an error liking the tweet. Try again.");
    });
  };
}

export function handleAddTweet(text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    saveTweet({ text, author: authedUser, replyingTo })
      .then((tweet) => dispatch(addTweet(tweet)))
      .then(() => dispatch(hideLoading()))
      .catch(e => {
        console.warn("Error in saving Tweet: ", e);
        alert("There was an error saving the tweet. Try again.");
      })
  };
}
