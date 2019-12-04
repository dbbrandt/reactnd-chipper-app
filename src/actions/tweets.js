import { saveLikeToggle, saveTweet } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
import { createAction } from "@reduxjs/toolkit";

// export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
// export const TOGGLE_TWEET = "TOGGLE_TWEET";
// export const ADD_TWEET = "ADD_TWEET";
//
// export const receiveTweets = tweets => ({
//   type: RECEIVE_TWEETS,
//   tweets
// });
//
// const toggleTweet = (id, authedUser, hasLiked) => ({
//   type: TOGGLE_TWEET,
//   id,
//   authedUser,
//   hasLiked
// });
//
// const addTweet = tweet => ({
//   type: ADD_TWEET,
//   tweet
// });

export const receiveTweets = createAction('RECEIVE_TWEETS');

export const toggleTweet = createAction('TOGGLE_TWEET');

export const addTweet = createAction('ADD_TWEET') ;

export function handleToggleTweet(info) {
  return dispatch => {
    dispatch(toggleTweet(info));
    saveLikeToggle(info).catch(e => {
      dispatch(toggleTweet(info));
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
