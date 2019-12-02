import { saveLikeToggle, saveTweet } from "../utils/api";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const NEW_TWEET = "NEW_TWEET";

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

const newTweet = tweet => ({
  type: NEW_TWEET,
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

export function handleNewTweet(text, author, replyingTo) {
  console.log("Handle New tweet: ", author);
  return dispatch => {
    saveTweet({ text, author, replyingTo })
      .then(tweet => dispatch(newTweet(tweet)))
      .catch(e => {
        console.warn("Error in saving Tweet: ", e);
        alert("There was an error saving the tweet. Try again.");
      });
  };
}
