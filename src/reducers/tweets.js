import { createReducer } from "@reduxjs/toolkit";
import { receiveTweets, addTweet, toggleTweet } from "../actions/tweets";

const tweets = createReducer([], {
  [receiveTweets]: (state, action) => (action.payload),
  [toggleTweet]: (state, action) => {
    let tweet = state[action.payload.id];
    tweet.likes = action.payload.hasLiked ?
      tweet.likes.filter((uid) => uid !== action.payload.authedUser)
      :
      tweet.likes.concat([action.payload.authedUser]);
   },
  [addTweet]: (state, action) => {
    const tweet = action.payload;
    state[tweet.id] = tweet;
    if (tweet.replyingTo !== null) {
      state[tweet.replyingTo].replies.push(tweet.id);
    }
   }
});

export default tweets;
