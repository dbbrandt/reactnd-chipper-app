// import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from "../actions/tweets";
//
// const tweets = (state = {}, action) => {
//   switch (action.type) {
//     case RECEIVE_TWEETS:
//       return {
//         ...state,
//         ...action.tweets
//       };
//     case TOGGLE_TWEET:
//       console.log('Toggle Tweet: ', action);
//       return {
//         ...state,
//         [action.id]: {
//           ...state[action.id],
//           likes: action.hasLiked ?
//             state[action.id].likes.filter((uid) => uid !== action.authedUser)
//             :
//             state[action.id].likes.concat([action.authedUser])
//         }
//       };
//     case ADD_TWEET:
//       const { tweet } = action;
//       let replyingTo = {};
//       if (tweet.replyingTo !== null ) {
//         const parent = state[tweet.replyingTo];
//         replyingTo = {
//           [parent.id]: {
//             ...parent,
//             replies: parent.replies.concat([tweet.id])
//           }
//         }
//       }
//
//       return {
//         ...state,
//         [action.tweet.id]: action.tweet,
//         ...replyingTo
//       };
//     default:
//       return state;
//   }
// };

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
